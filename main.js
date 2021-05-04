"use strict";

const api = {
  key: "2ec34ecd6936738f122acc6538c634c3",
};

const inputBox = document.querySelector(".location");
inputBox.addEventListener("keypress", (evt) => {
  if (evt.keyCode === 13) {
    //13 is the keycode of "enter"
    locationResult(inputBox.value);
    console.log(inputBox.value);
  }
});

function locationResult(cityName) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${api.key}`
  )
    .then((weather) => {
      return weather.json();
    })
    .then((data) => {
      //City
      let city = document.querySelector(".main-content .content .city");
      city.innerText = `${data.name},${data.sys.country}`;
      //Date
      let today = new Date();
      const months = [
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
        "December",
      ];
      let date = document.querySelector(".main-content .content .date");
      date.innerText = `${today.getDate()} ${
        months[today.getMonth()]
      } ${today.getFullYear()}`;
      //Temperature
      let temp = document.querySelector(".main-content .content .temp");
      temp.innerText = `${Math.round(data.main.temp)}°C`;
      //Weather
      let weatherToday = document.querySelector(
        ".main-content .content .weather-condition"
      );
      weatherToday.innerText = data.weather[0].main;
    
      let min_max = document.querySelector(
        ".main-content .content .min-max-temp"
      );
      min_max.innerText = `${Math.round(data.main.temp_min)}°C/${Math.round(
        data.main.temp_max
      )}°C`;
      
    });
}
