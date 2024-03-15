import React, { useEffect } from 'react';


const Map = (props) => {
  
  useEffect(() => {

    

    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 25.37600873168248, lng: 82.95931146120571 },
      zoom: 5,
    });

    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({
      map: map,
    });

    const start = new window.google.maps.LatLng(25.37600873168248, 82.95931146120571);
    const end = new window.google.maps.LatLng(25.25309105163956, 83.00257002485706);

    const request = {
      origin: start,
      destination: end,
      travelMode: 'DRIVING',
    };

    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result);
      }
    });
  }, []);

  return (
    
    <div id="map" style={{ width: '100%', height: '100%' }}>
    </div>
  );
};

export default Map;