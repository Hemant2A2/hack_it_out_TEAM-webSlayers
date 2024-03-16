import "./App.css";
import React, { useState } from "react";
import SearchCity from "./components/SearchCity";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherMap from "./components/WeatherMap";

const App = () => {
  const weather_API = process.env.REACT_APP_CITY_API;
  const google_API = process.env.REACT_APP_GOOGLE_API;
  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("Patna");
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
            element={<WeatherMap weather_API={weather_API} google_API={google_API} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
