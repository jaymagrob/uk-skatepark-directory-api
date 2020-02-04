import React from 'react'
import MapGL from 'react-map-gl'

const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN

class SmallMap extends React.Component {
  
  state = {}

  
  render() {
    const { locationLat, locationLng } = this.props  
    return (
      <MapGL
        mapboxApiAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        width= {360}
        height= {360}
        latitude = {locationLat} 
        longitude= {locationLng}
        zoom= {4}>  
      </MapGL>
    )
  }
}

export default SmallMap