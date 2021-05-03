import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div class="row justify-content-center" id="forecast">
      <div class="col-sm-2" id="days">
        Saturday
        <p id="day-temp">12°</p>
      </div>
      <div class="col-sm-2" id="days">
        Sunday
        <p id="day-temp">11°</p>
      </div>
      <div class="col-sm-2" id="days">
        Monday
        <p id="day-temp">9°</p>
      </div>
      <div class="col-sm-2" id="days">
        Tuesday
        <p id="day-temp">12°</p>
      </div>
      <div class="col-sm-2" id="days">
        Wednesday
        <p id="day-temp">12°</p>
      </div>
      <div class="col-sm-2" id="days">
        Thursday
        <p id="day-temp">8°</p>
      </div>
    </div>
  );
}
