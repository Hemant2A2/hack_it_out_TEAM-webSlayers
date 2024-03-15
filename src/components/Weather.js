import React, { useEffect, useState } from "react";

const Weather = (props) => {
  const [weather, setWeather] = useState({temperatureApparent:"39",temperature:"32",humidity:"0.35",rainIntensity:"1",windSpeed:"0.68",visibility:"0.75"});
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

      const url = `https://api.tomorrow.io/v4/timelines?location=${lat1},${lng1}&fields=temperatureApparent,temperature,humidity,rainIntensity,windSpeed,visibility&timesteps=1h&units=metric&apikey=${props.apikey}`;
      
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Data parsing successful.");
        const realData = data.data.timelines.intervals.values;
        setWeather(realData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [props.apikey]);

  return (
    <div>
      <h1>Starting location: {props.from}</h1>
      <h1>Final location: {props.to}</h1>
    </div>
  );
};

export default Weather;
