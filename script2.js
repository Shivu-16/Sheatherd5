const L1 = document.getElementById("londonInfo");
const M1 = document.getElementById("moscowInfo");
const B1 = document.getElementById("bostonInfo");
const C1 = document.getElementById("newCity");


const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9fd0d0096bmsh49832b734e306f4p1eded6jsn3914011691da",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      console.log(response.max_temp);
      console.log(response.min_temp);
      console.log(response.humidity);
      console.log(response.max_temp);
      let Max = response.max_temp;
      let Min = response.min_temp;
      let hum = response.humidity;
      let temp = response.temp;

      L1.innerHTML = `<div class="card-body" id="londonInfo">
          <ul class="list-unstyled mt-3 mb-4">
            <li>Max Temp : ${Max} <span id="Max"></span></li>
            <li>Min Temp : ${Min} <span id="Min"></span></li>
            <li>Humidity : ${hum} <span id="hum"></span></li>
            <li>Temp Now : ${temp} <span id="temp"></span></li>
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-outline-primary">More Info </button>
        </div>`;
    })

    .catch((err) => console.error(err));
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    console.log(response.max_temp);
    console.log(response.min_temp);
    console.log(response.humidity);
    console.log(response.max_temp);
    let Max = response.max_temp;
    let Min = response.min_temp;
    let hum = response.humidity;
    let temp = response.temp;

    C1.innerHTML = city;

    L1.innerHTML = `<div class="card-body" id="londonInfo">
        <ul class="list-unstyled mt-3 mb-4">
          <li>Max Temp : ${Max}<span id="Max"></span></li>
          <li>Min Temp : ${Min}<span id="Min"></span></li>
          <li>Humidity : ${hum}<span id="hum"></span></li>
          <li>Temp Now : ${temp}<span id="temp"></span></li>
        </ul>
        <button type="button" class="w-100 btn btn-lg btn-outline-primary">More Info </button>
      </div>`;
  })

  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Moscow",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    console.log(response.max_temp);
    console.log(response.min_temp);
    console.log(response.humidity);
    console.log(response.max_temp);
    let Max = response.max_temp;
    let Min = response.min_temp;
    let hum = response.humidity;
    let temp = response.temp;

    M1.innerHTML = `<div class="card-body" id="moscowInfo">
        <ul class="list-unstyled mt-3 mb-4">
          <li>Max Temp : ${Max}<span id="Max"></span></li>
          <li>Min Temp : ${Min}<span id="Min"></span></li>
          <li>Humidity : ${hum}<span id="hum"></span></li>
          <li>Temp Now : ${temp}<span id="temp"></span></li>
        </ul>
        <button type="button" class="w-100 btn btn-lg btn-outline-primary">More Info </button>
      </div>`;
  })

  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    console.log(response.max_temp);
    console.log(response.min_temp);
    console.log(response.humidity);
    console.log(response.max_temp);
    let Max = response.max_temp;
    let Min = response.min_temp;
    let hum = response.humidity;
    let temp = response.temp;

    B1.innerHTML = `<div class="card-body" id="bostonInfo">
        <ul class="list-unstyled mt-3 mb-4">
          <li>Max Temp : ${Max}<span id="Max"></span></li>
          <li>Min Temp : ${Min}<span id="Min"></span></li>
          <li>Humidity : ${hum}<span id="hum"></span></li>
          <li>Temp Now : ${temp}<span id="temp"></span></li>
        </ul>
        <button type="button" class="w-100 btn btn-lg btn-outline-primary">More Info </button>
      </div>`;
  })

  .catch((err) => console.error(err));

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
