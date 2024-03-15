import "./App.css";
import React, { useState } from "react";
import SearchCity from "./components/SearchCity";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherMap from "./components/WeatherMap";

const App = () => {
  const weather_API = process.env.REACT_APP_WEATHER_API;
  const google_API = process.env.REACT_APP_GOOGLE_API;
  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("Patna");
  console.log({ weather_API });
  console.log({ google_API });
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <SearchCity from={from} setFrom={setFrom} to={to} setTo={setTo} />
            }
          ></Route>
          <Route
            exact
            path="/map/:from/:to"
            element={<WeatherMap apikey={weather_API} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
