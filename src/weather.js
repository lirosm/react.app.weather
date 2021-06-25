import React from "react";
export default function Weather() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form id="search-form" className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="City..."
                  className="form-control"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <div className="center">
            <div className="row">
              <div className="col-4">
                <div className="overview">
                  <h1 id="city">Oslo</h1>
                  <ul>
                    <li>
                      updated: <span id="date"></span>
                    </li>
                    <li id="description"></li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                  alt="weather-icon"
                  id="icon"
                  className="float-left"
                />
              </div>
              <div className="col-4">
                <div className="d-flex weather-temp justify-content-center">
                  <div className="float-right">
                    <span id="temperature">16</span>
                    <span className="units">°C</span>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <ul>
                    <li>
                      Feels like: <span id="feels-like">15</span>°C
                    </li>
                    <li>
                      Humidity:<span id="humidity">27</span>%
                    </li>
                    <li>
                      Wind:<span id="wind">2</span> Km/H
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="weather-forecast" id="Forecast"></div>
          <footer>
            <small>
              <a
                href="https://github.com/lirosm/Vanilla-weather-app"
                target="_blank"
                rel="noreferrer"
              >
                Open-source code
              </a>
              , by Liriona Osmani
            </small>
          </footer>
        </div>
      </div>
    </div>
  );
}