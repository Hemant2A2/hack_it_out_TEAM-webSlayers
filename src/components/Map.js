import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '65vw',
  height: '100vh',
};
const center = {
  lat: 7.2905715, 
  lng: 80.6337262, 
};

const Map = (props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: props.apikey,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      {/* <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap> */}
      <h1>To be updated...</h1>
    </div>
  );
};

export default Map;