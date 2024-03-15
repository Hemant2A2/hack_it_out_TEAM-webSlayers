import './App.css';
import React from 'react';
const App = () => {
  const weather_API = process.env.REACT_APP_WEATHER_API ;
  const google_API = process.env.REACT_APP_GOOGLE_API ;
  console.log({weather_API});
  console.log({google_API});
  return (
    <>
      <h1>This is the start.</h1>
    </>
  );
}

export default App;
