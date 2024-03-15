import React from "react";
import Weather from "./Weather";
import Map from "./Map";
import { useParams } from "react-router-dom";

const WeatherMap = (props) => {
  const {from,to} = useParams();
  return (
    <div className="containerX">
      <div className="container1">
        <Map apikey={props.google_API} from={from} to={to} />
      </div>
      <div className="container2">
        <Weather apikey1={props.weather_API1} apikey2={props.weather_API2} from={from} to={to} />
      </div>
    </div>
  );
};

export default WeatherMap;
