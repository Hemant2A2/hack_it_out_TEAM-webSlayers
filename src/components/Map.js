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

            // Add forbidden points as markers
            const forbiddenPoints = [
              {lat:25.309590537279597,lng:83.05637429770343},
              {lat:25.38394004428046,lng:82.97446578368819},
              {lat:25.26889410375818,lng:82.98952988161697},
              {lat:25.30644451930907,lng:83.05016274914213},
              {lat:25.353614109234282,lng:83.04967315040619},
              {lat:25.296268970090615,lng:83.03308520139154},
              {lat:25.354383805461584,lng:82.97162646633609},
              {lat:25.273636931029625,lng:83.03682986209459},
              {lat:25.31803468571865,lng:83.01965769369916},
              {lat:25.28198881244295,lng:82.96779597628603},
              {lat:25.304405820810146,lng:83.00728989184033},
              {lat:25.35277049369147,lng:82.92661274444681},
              {lat:25.246774677184234,lng:83.04463214702191},
              {lat:25.261689867682435,lng:83.0426115010183},
              {lat:25.338364697518774,lng:82.99284594192304} 
            ];

            forbiddenPoints.forEach((point) => {
              new window.google.maps.Marker({
                position: point,
                map: map,
                icon: {
                  // url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png', // Custom marker icon
                  path: window.google.maps.SymbolPath.CIRCLE,
                  fillColor: 'red',
                  fillOpacity: 1,
                  strokeWeight: 0,
                  scale: 10, // Adjust the scale as needed
                },
              });
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