import React, { useEffect, useState } from "react";

const Weather = (props) => {
  const [weather, setWeather] = useState({temperatureApparent:"39",temperature:"32",humidity:"60",rainIntensity:"0.05",windSpeed:"8",visibility:"0.75"});
  const [weather2, setWeather2] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      let lat1 = 25.2707008;
      let lng1 = 82.9830734;

      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            lat1 = position.coords.latitude;
            lng1 = position.coords.longitude;
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }

      const url = `https://api.tomorrow.io/v4/timelines?location=${lat1},${lng1}&fields=temperatureApparent,temperature,humidity,rainIntensity,windSpeed,visibility&timesteps=1h&units=metric&apikey=${props.apikey1}`;
      const url2 = `https://api.weatherapi.com/v1/current.json?key=${props.apikey2}&q=${props.to}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        const realData = data.data.timelines.intervals.values;
        setWeather(realData);
      } catch (error) {
        
      }
      try {
        const response2 = await fetch(url2);
        const data2 = await response2.json();
        const realData2 = data2.current;
        setWeather2({temperatureApparent:realData2.feelslike_c,temperature:realData2.temp_c,humidity:realData2.humidity,rainIntensity:realData2.precip_mm,windSpeed:realData2.wind_kph,visibility:realData2.vis_km});
      } catch (error) {
        console.log("Some error occured in getting the weather.");
      }
    };

    fetchData();
  }, [props.apikey1, props.apikey2, props.to]);

  return (
    <div className="weather">
      <div className="weatherDetails cur">
      <h5>Current location: </h5>
      <p>Humidity: {weather.humidity}</p>
      <p>Rain Intensity: {weather.rainIntensity} mm</p>
      <p>Temperature: {weather.temperature} &deg; C</p>
      <p>Feels Like: {weather.temperatureApparent} &deg; C</p>
      <p>Visibility: {weather.visibility} km</p>
      <p>Wind Speed: {weather.windSpeed} km/hr</p>
      </div>
      <div className="weatherDetails dest">
      <h5>{props.to}: </h5>
      <p>Humidity: {weather2.humidity}</p>
      <p>Rain Intensity: {weather2.rainIntensity} mm</p>
      <p>Temperature: {weather2.temperature} &deg; C</p>
      <p>Feels Like: {weather2.temperatureApparent} &deg; C</p>
      <p>Visibility: {weather2.visibility} km</p>
      <p>Wind Speed: {weather2.windSpeed} km/hr</p>
      </div>
    </div>
  );
};

export default Weather;
