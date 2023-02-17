
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

console.log("Here");

fetch(`api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=${API_KEY}`).then(Response => Response.json()).then(data => {
    console.log("Here");
    console.log(data);
    })

fetch()

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



futureTempData()
function futureTempData () {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success)
        let {latitude,longitude} = success.coords;

        function getCountry(){
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=28.4721152&lon=77.1293184&appid=7d82e82bdffd132640b4c8fb1859b864`)
            .then((response) => response.json())
            .then((newData) => {
              console.log(newData.list[1].main.temp_min );
              console.log(newData);
            })
          }
        
          getCountry();
        console.log(newData);
        showWeatherData(newData);
        })
}

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



function showWeatherData (data,newData){
    
    let temp_now  = Number(data.main.temp-273.15).toFixed(2);
    console.log(newData)
    

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
    <div class="weather-item">
        <div> Sunrise </div>
        <div> ${window.moment(data.sys.sunrise * 1000).format('HH:mm a')} </div>
    </div>
        <div class="weather-item">
            <div> Sunset </div>
            <div> ${window.moment(data.sys.sunset * 1000).format('HH:mm a')} </div>
        </div>
    
    
    `;

    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success)
        let {latitude,longitude} = success.coords;
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=7d82e82bdffd132640b4c8fb1859b864`)
        .then(response => response.json())
        .then(newData => {
            document.getElementById("day" + (3)).innerHTML = window.moment((newData.list[2].dt*1500 )).format('dddd')
            console.log("here");
            console.log((newData.list[1].main.temp_min - 273.15).toFixed(2));
            console.log(window.moment(((newData.list[0].dt*1000))));
            const newDay = window.moment(((newData.list[0].dt*1000)))
            document.getElementById("day" + (2)).innerHTML = window.moment((newData.list[1].dt*1000 )).format('dddd');
            document.getElementById("day" + (4)).innerHTML = window.moment((newData.list[3].dt*2000 )).format('dddd');
            document.getElementById("day" + (5)).innerHTML = window.moment((newData.list[4].dt*2500 )).format('dddd');
            document.getElementById("day" + (6)).innerHTML = window.moment((newData.list[5].dt*3000 )).format('dddd');
            for(i = 0; i<40; i++){
                document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(newData.list[i].main.temp_min - 273.15).toFixed(2)+ "° C";
                document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(newData.list[i].main.temp_max - 273.15).toFixed(2) + "° C" ;
                document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+newData.list[i].weather[0].icon+".png";
                document.getElementById("day" + (1)).innerHTML = "Today";
        }
        })
        
    })
}


    weatherForecastEl.innerHTML = otherDayForcast;