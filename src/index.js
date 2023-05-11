 function formatDate(timestamp){
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10){
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10){
        minutes = `0${minutes}`;
    }

    let days =[ 
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
        ];

    let months =[ 
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
        ];
    let day = days[date.getDay()];
    let todaysDate = date.getDate();
    let month = months[date.getMonth()];
    return `${day} ${todaysDate} ${month} ${hours}:${minutes}`;
    
 }

function showWeather(response) {
     let temp=document.querySelector("#temperature");
     let temperature=Math.round(response.data.main.temp);
     let dateElement = document.querySelector("#date");
     let cityElement = document.querySelector("#city");
    //  let iconElement = document.querySelector("icon")
     let descriptionElement = document.querySelector("#weather-description")

     celsiusTemperature = response.data.main.temp;

     cityElement.innerHTML = response.data.name;
     temp.innerHTML=`${temperature}`;
     descriptionElement.innerHTML = response.data.weather[0].description;
     dateElement.innerHTML = formatDate(response.data.dt * 1000);
//      iconElement.setAttribute(
//     "src",
//     `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
//   );
//   iconElement.setAttribute("alt", response.data.weather[0].description);
 }


 
 function searchCity(city) {
     let apiKey="ec75c387e91187f520f83a7c2bdb2671";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(showWeather);
 }

 function handleSubmit(event) {
     event.preventDefault();
     let city=document.querySelector("#city-input").value;
     searchCity(city);
     let newCity=document.querySelector("#city");
     newCity.innerHTML=city;
 }


 
function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("Abuja");









 // function retrievePosition(position) {
 //   let lat = position.coords.latitude;
 //   let lon = position.coords.longitude;
 // }

 // navigator.geolocation.getCurrentPosition(retrievePosition);

 //challenge1
 // let date = document.querySelector("#date-time");
 // let now = new Date();
 // let days = [
 //   "Sunday",
 //   "Monday",
 //   "Tuesday",
 //   "Wednesday",
 //   "Thursday",
 //   "Friday",
 //   "Saturday"
 // ];

 // let day = days[now.getDay()];
 // let hour = now.getHours();
 // let min = now.getMinutes();
 // date.innerHTML = ` ${day}, ${hour}:${min}`;

 // //challenge 2
 // let city = document.querySelector("#city");
 // function changeCity(event) {
 //   event.preventDefault();
 //   let input = document.querySelector("#search-input");
 //   city.innerHTML = input.value;
 // }

 // let form = document.querySelector("#search-form");
 // form.addEventListener("submit", changeCity);

 // //challenge 3
 // let temperature = document.querySelector("#temperature");
 // let fahrenheitTemperature = Math.round((17 * 9) / 5 + 32);

 // function changeTemp(event) {
 //   event.preventDefault();
 //   temperature.innerHTML = `${fahrenheitTemperature}°f`;
 // }

 // temperature.addEventListener("click", changeTemp);

 //IGNORE :

 // let cities = {
 //   abuja: {
 //     temperature: 33.4,
 //     humidity: 20
 //   },

 //   lagos: {
 //     temperature: 30.2,
 //     humidity: 25
 //   },

 //   paris: {
 //     temperature: 19.2,
 //     humidity: 10
 //   },

 //   durban: {
 //     temperature: 20.6,
 //     humidity: 20
 //   },

 //   japan: {
 //     temperature: 14.5,
 //     humidity: 15
 //   }
 // };

 // // function isaCity() {
 // //   cities.forEach(function (city) {
 // //     if (cityName == city.name) {
 // //       alert(`It is currently ${city.temperature} in ${cityName}`);
 // //     } else {
 // //       alert(
 // //         `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather${cityName}`
 // //       );
 // //     }
 // //   });
 // // }

 // // isaCity();

 // let city = prompt("Enter a city ");

 // city = city.toLowerCase();
 // if (cities[city] !== undefined) {
 //   let temperature = cities[city].temperature;
 //   let humidity = cities[city].humidity;
 //   let celsiusTemperature = Math.round(temperature);
 //   let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

 //   alert(
 //     `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
 //   );
 // } else {
 //   alert(
 //     `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather${city}`
 //   );
 // }

 