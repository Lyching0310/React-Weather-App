import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "aff29a6b33c30edafe99104b632f71d7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="search-section">
        <form class="row g-2 justify-content-center" id="search-form">
          <div class="col-md-7">
            <input
              type="text"
              class="form-control"
              id="search-bar"
              placeholder="Enter a city..."
              autocomplete="off"
              autoFocus={true}
              onChange={updateCity}
            />
          </div>
          <div class="col-md-1 justify-content-center">
            <button
              type="submit"
              class="btn btn-primary me-md-3"
              id="discover-button"
            >
              Search
            </button>
          </div>
          <div class="col-md-4 justify-content-center">
            <button type="submit" class="btn btn-primary" id="now-button">
              Current
            </button>
          </div>
        </form>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity:{weather.humidity}%</li>
          <li>Wind: {weather.wind}mph</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
