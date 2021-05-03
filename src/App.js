import "./App.css";

import CenterPage from "./CenterPage";
import CityDate from "./CityDate";
import Search from "./Search";
import Forecast from "./Forecast";
import TimeHumidity from "./TimeHumidity";

function App() {
  return (
    <div className="container">
      <div id="weather" className="weather-container">
        <CityDate />
        <TimeHumidity />
        <CenterPage />
        <Search city="New York" />
        <Forecast />
      </div>
      <br />
      <span className="signature">
        Created by Alyssa Reyes {""}
        <a
          href="https://github.com/Lyching0310/React-Weather-App"
          target="_blank"
          rel="noreferrer"
          id="gitLink"
        >
          Open-source code
        </a>
        {""} and {""}
        <a
          href="https://alyssareactweatherapp.netlify.app/"
          target="_blank"
          rel="noreferrer"
          id="Netlify"
        >
          Hosted on Netlify
        </a>
      </span>
    </div>
  );
}

export default App;
