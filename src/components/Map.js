import React, { useEffect } from 'react';


const Map = (props) => {
  
  useEffect(() => {

    // Geocoding for start location
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: props.from }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const startLat = results[0].geometry.location.lat();
        const startLng = results[0].geometry.location.lng();
        
        // Geocoding for end location
        geocoder.geocode({ address: props.to }, (results, status) => {
          if (status === 'OK' && results[0]) {
            const endLat = results[0].geometry.location.lat();
            const endLng = results[0].geometry.location.lng();

            const map = new window.google.maps.Map(document.getElementById('map'), {
              center: { lat: startLat, lng: startLng },
              zoom: 5,
            });

            const directionsService = new window.google.maps.DirectionsService();
            const directionsRenderer = new window.google.maps.DirectionsRenderer({
              map: map,
            });

            const start = new window.google.maps.LatLng(startLat, startLng);
            const end = new window.google.maps.LatLng(endLat, endLng);

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
          } else {
            console.error('Geocode was not successful for the end location:', status);
          }
        });
      } else {
        console.error('Geocode was not successful for the start location:', status);
      }
    });
  }, []);

  return (
    
    <div id="map" style={{ width: '100%', height: '100%' }}>
    </div>
  );
};

export default Map;