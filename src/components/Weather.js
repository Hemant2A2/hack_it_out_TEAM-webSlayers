import React, { useEffect, useState } from "react";

const Weather = (props) => {
  const [weather, setWeather] = useState({temperatureApparent:"39",temperature:"32",humidity:"0.35",rainIntensity:"1",windSpeed:"0.68",visibility:"0.75"});
  const [weather2, setWeather2] = useState({temperatureApparent:"39",temperature:"32",humidity:"0.35",rainIntensity:"1",windSpeed:"0.68",visibility:"0.75"});
  useEffect(() => {
    const fetchData = async () => {
      let lat1 = 25.2707008;
      let lng1 = 82.9830734;
      let lat2 = 25.2707008;
      let lng2 = 82.9830734;

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

      const url = `https://api.tomorrow.io/v4/timelines?location=${lat1},${lng1}&fields=temperatureApparent,temperature,humidity,rainIntensity,windSpeed,visibility&timesteps=1h&units=metric&apikey=${props.apikey}`;
      const url2 = `https://api.tomorrow.io/v4/timelines?location=${lat2},${lng2}&fields=temperatureApparent,temperature,humidity,rainIntensity,windSpeed,visibility&timesteps=1h&units=metric&apikey=${props.apikey}`;
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
        const realData2 = data2.data.timelines.intervals.values;
        setWeather2(realData2);
      } catch (error) {
        
      }
    };

    fetchData();
  }, [props.apikey]);

  return (
    <div className="weather">
      <div className="cur">
      <h2>Weather report of your current location: </h2>
      <p>Humidity: {weather.humidity}</p>
      <p>Rain Intensity: {weather.rainIntensity}</p>
      <p>Temperature: {weather.temperature}</p>
      <p>Feels Like: {weather.temperatureApparent}</p>
      <p>Visibility: {weather.visibility}</p>
      <p>Wind Speed: {weather.windSpeed}</p>
      </div>
      <div className="dest">
      <h2>Weather report of your destination: </h2>
      <p>Humidity: {weather2.humidity}</p>
      <p>Rain Intensity: {weather2.rainIntensity}</p>
      <p>Temperature: {weather2.temperature}</p>
      <p>Feels Like: {weather2.temperatureApparent}</p>
      <p>Visibility: {weather2.visibility}</p>
      <p>Wind Speed: {weather2.windSpeed}</p>
      </div>
    </div>
  );
};

export default Weather;
