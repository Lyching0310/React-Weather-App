import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./TimeHumidity.css";

export default function TimeHumidity() {
  return (
    <div class="row">
      <div className="wind-condition-time" id="typeOfCondition">
        <div class="col-sm-12">
          <h3 id="timeDisplay">15:00</h3>
        </div>
        <div class="col-sm-12">
          <span className="condition" id="humid">
            {" "}
            Humidity: 1%
          </span>
        </div>
        <div class="col-12">
          <span className="condition" id="wind">
            {" "}
            Wind: 6 mph
          </span>
        </div>
      </div>
    </div>
  );
}
