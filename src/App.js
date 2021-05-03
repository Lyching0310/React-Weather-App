import "./App.css";
import Weather from "./Weather";
import CenterPage from "./CenterPage";
import CityDate from "./CityDate";
import Search from "./Search";

function App() {
  return (
    <div className="container">
      <div id="weather" className="weather-container">
        <CityDate />
        <CenterPage />
        <Search />
        <Weather />
      </div>
    </div>
  );
}

export default App;
