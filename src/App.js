import React from "react";
import Weather from "./weather";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello from React</h1>
      </header>
      <Weather city="Oslo" />
    </div>
  );
}
export default App;
