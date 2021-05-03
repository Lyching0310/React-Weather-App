import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="search-section">
      <form class="row g-2 justify-content-center" id="search-form">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            id="search-bar"
            placeholder="Enter a city"
            autocomplete="off"
          />
        </div>
        <div class="col-auto justify-content-center">
          <button
            type="submit"
            class="btn btn-primary mb-3"
            id="discover-button"
          >
            Search
          </button>
        </div>
        <div class="col-auto justify-content-center">
          <button type="submit" class="btn btn-success mb-3" id="now-button">
            Current
          </button>
        </div>
      </form>
    </div>
  );
}
