import React from "react";

import "./CenterPage.css";

export default function CenterPage() {
  return (
    <section className="center page">
      <p id="weatherType"> Sunny</p>
      <p id="temperature">
        <span id="numericalTemp"></span>
        <span className="degrees" id="celsius">
          20°C{" "}
        </span>
      </p>
    </section>
  );
}
