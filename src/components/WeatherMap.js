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
        <Weather apikey={props.weather_API} from={from} to={to} />
      </div>
    </div>
  );
};

export default WeatherMap;
