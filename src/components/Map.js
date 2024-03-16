import React, { useEffect, useRef, useState } from "react";

const Map = (props) => {
  const [optimizedPath, setOptimizedPath] = useState(null);
  const [forbiddenPoints, setForbiddenPoints] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    const calculateOptimizedPath = (startLat, startLng, endLat, endLng) => {
      // Create a map instance
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: startLat, lng: startLng },
        zoom: 5,
      });

      // Add forbidden points as markers
      forbiddenPoints.forEach((point) => {
        new window.google.maps.Marker({
          position: point,
          map: map,
          icon: {
            // url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png', // Custom marker icon
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: "red",
            fillOpacity: 1,
            strokeWeight: 0,
            scale: 10, // Adjust the scale as needed
          },
        });
      });

      const waypoints = forbiddenPoints.map((point) => ({
        location: new window.google.maps.LatLng(point.lat, point.lng),
        stopover: false,
      }));

      // Create a directions service and renderer
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer({
        map: map,
      });

      const start = new window.google.maps.LatLng(startLat, startLng);
      const end = new window.google.maps.LatLng(endLat, endLng);

      // // Calculate routes avoiding each forbidden point
      // const routePromises = forbiddenPoints.map((forbiddenPoint) => {
      //   return new Promise((resolve, reject) => {
      //     const request = {
      //       origin: start,
      //       destination: end,
      //       travelMode: "DRIVING",
      //       waypoints: [
      //         {
      //           location: forbiddenPoint,
      //           stopover: false,
      //         },
      //       ],
      //     };

      //     directionsService.route(request, (result, status) => {
      //       if (status === "OK") {
      //         resolve(result.routes[0]);
      //       } else {
      //         reject(new Error(`Directions request failed: ${status}`));
      //       }
      //     });
      //   });
      // });

      // // Find the shortest route among all calculated routes
      // Promise.all(routePromises)
      //   .then((routes) => {
      //     let shortestRoute = routes[0];
      //     routes.forEach((route) => {
      //       if (
      //         route &&
      //         route.legs[0].distance.value <
      //           shortestRoute.legs[0].distance.value
      //       ) {
      //         shortestRoute = route;
      //       }
      //     });

      //     const directionsRenderer = new window.google.maps.DirectionsRenderer({
      //       map: map,
      //     });
      //     directionsRenderer.setDirections(shortestRoute);

      //     setOptimizedPath(shortestRoute);
      //   })
      //   .catch((error) => {
      //     console.error("Error calculating optimized path:", error);
      //   });

      const request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING',
        waypoints: waypoints,
      };

      // Request directions and plot the optimized route
      directionsService.route(request, (result, status) => {
        if (status === 'OK') {
          setOptimizedPath(result.routes[0]);
          directionsRenderer.setDirections(result);
        }
      });

      // Add click event listener to add new forbidden points
      map.addListener("click", (event) => {
        const clickedLatLng = event.latLng.toJSON();
        setForbiddenPoints((prevForbiddenPoints) => [
          ...prevForbiddenPoints,
          clickedLatLng,
        ]);
      });
    };

    // Geocoding for start location
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: props.from }, (results, status) => {
      if (status === "OK" && results[0]) {
        const startLat = results[0].geometry.location.lat();
        const startLng = results[0].geometry.location.lng();

        // Geocoding for end location
        geocoder.geocode({ address: props.to }, (results, status) => {
          if (status === "OK" && results[0]) {
            const endLat = results[0].geometry.location.lat();
            const endLng = results[0].geometry.location.lng();

            // Calculate optimized path
            calculateOptimizedPath(startLat, startLng, endLat, endLng);
          } else {
            console.error(
              "Geocode was not successful for the end location:",
              status
            );
          }
        });
      } else {
        console.error(
          "Geocode was not successful for the start location:",
          status
        );
      }
    });
  }, [props.from, props.to, forbiddenPoints]);

  return (
    <div ref={mapRef} style={{ width: "100%", height: "100%" }}>
      {optimizedPath && (
        <div>
          <h3>Optimized Path</h3>
          <ul>
            {optimizedPath.legs.map((leg, index) => (
              <li key={index}>
                {leg.start_address} to {leg.end_address}: {leg.distance.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Map;
