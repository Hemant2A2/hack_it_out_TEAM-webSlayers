import React from 'react'

const Map = () => {
  return (
    <div>
      <gmp-map center="25.31776237487793,82.9713363647461" zoom="14" map-id="DEMO_MAP_ID">
      <gmp-advanced-marker position="25.31776237487793,82.9713363647461" title="My location"></gmp-advanced-marker>
    </gmp-map>
    </div>
  )
}

export default Map
