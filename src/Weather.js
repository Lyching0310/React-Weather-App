import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in London is ${Math.round(response.data.main.temp)}°C`);
  }

  let apiKey = "aff29a6b33c30edafe99104b632f71d7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <p>ALYSSA</p>;
}
