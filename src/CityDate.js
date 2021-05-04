import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./CityDate.css";

export default function CityDate() {
  return (
    <div class="row">
      <div class="city-date">
        <div class="col-6" id="cityName">
          <h1>London</h1>
        </div>
        <div class="col-6">
          <h2 id="day">Friday</h2>
        </div>
      </div>
    </div>
  );
}
