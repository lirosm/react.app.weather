import React from "react";
import Weather from "./weather";


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1> Hello from React</h1>
       <Weather city="Oslo" />

          <footer>
          <small>
            <a href="https://github.com/lirosm/Vanilla-weather-app" target="_blank">
              Open-source code</a>
            , by Liriona Osmani
          </small>
        </footer>
      </header>
    </div>
  );
}

export default App;
