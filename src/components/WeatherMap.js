import React from "react";
import Weather from "./Weather";
import Map from "./Map";
import { useParams } from "react-router-dom";

const WeatherMap = (props) => {
  const {from,to} = useParams();
  return (
    <div className="container">
      <div className="container1">
        <Map apikey={props.apikey} from={from} to={to} />
      </div>
      <div className="container2">
        <Weather apikey={props.apikey} from={from} to={to} />
      </div>
    </div>
  );
};

export default WeatherMap;
