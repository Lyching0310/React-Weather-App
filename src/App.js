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
    </div>
  );
}

export default App;
