import React from 'react'
import Weather from './Weather'
import Map from './Map'

const WeatherMap = (props) => {
  return (
    <div>
      <div className="container1">
        <Weather apikey={props.apikey}/>
      </div>
      <div className="container2">
        <Map apikey={props.apikey}/>
      </div>
    </div>
  )
}

export default WeatherMap
