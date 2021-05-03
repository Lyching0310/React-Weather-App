import "./App.css";
import Weather from "./Weather";
import CenterPage from "./CenterPage";

function App() {
  return (
    <div className="container">
      <div id="weather" className="weather-container">
        <Weather />

        <CenterPage />
      </div>
    </div>
  );
}

export default App;
