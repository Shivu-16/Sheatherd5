
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY = '7d82e82bdffd132640b4c8fb1859b864';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const list = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[list] + ', ' + date+ ' ' + months[month]

}, 1000);

getWeatherData()
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success)
        let {latitude,longitude} = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`).then(Response => Response.json()).then(data => {

        console.log(data)
        showWeatherData(data);
        })

    })
}

futureTempData()
function futureTempData () {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success)
        let {latitude,longitude} = success.coords;

        fetch(`api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=${8}&unit=metric&appid=${API_KEY}`).then(Response => Response.json()).then(newdata => {

        console.log(newdata)
        showWeatherData(newdata);
        })

    })
}

function showWeatherData (data,newdata){
    
    let temp_now  = data.main.temp;
    

    let Humidity = data.main.humidity;
    let pressure = data.main.pressure;
    let wind_speed = data.wind.speed;
    

    let sunrise = data.sys.country;

    timezone.innerHTML = data.name + '/' + data.sys.country ;
    countryEl.innerHTML = data.coord.lat + 'N ' + data.coord.lon +'E'

    currentWeatherItemsEl.innerHTML = 
    `<div class="weather-item">
        <div>Humidity</div>
        <div>${Humidity}%</div>
    </div>
    <div class="weather-item">
        <div>Pressure</div>
        <div>${pressure}</div>
    </div>
    <div class="weather-item">
        <div>Wind Speed</div>
        <div>${wind_speed} KM/Hr</div>
    </div>
    <div class="weather-item">
        <div>Temp Now</div>
       <div>${temp_now} &#8451</div>
    </div>
    
    
    `;

    let otherDayForcast = ''
    newdata.list.date.forEach((list, idx) => {
        if(idx == 0){

            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn//${list.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="list">${window.moment(list.dt*1000).format('dddd')}</div>
                <div class="temp"> MAX - ${newdata.list.temp.eve}&#176;C</div>
                <div class="temp"> MIN - ${newdata.temp.list}&#176;C</div>
            </div>
            
            `
        }else{
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="list">${window.moment(list.dt*1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="temp"> MAX - ${list.temp.night}&#176;C</div>
                <div class="temp" - ${list.temp.list}&#176;C</div>
            </div>
            
            `
        }
    })


    weatherForecastEl.innerHTML = otherDayForcast;
}