import React, { Link } from 'react'
import MapGL, { NavigationControl, ScaleControl, Marker, Popup } from 'react-map-gl'
import axios from 'axios'
import 'mapbox-gl/dist/mapbox-gl.css'
const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN

class Map extends React.Component {
  state = {
    skateParks: [],
    showPopup: false,
    longitude: 0,
    latitude: 0,
    name: '',
    image: '',
    id: '',
    viewport: { longitude: -0.1, latitude: 51.5081, zoom: 10 }
  }

  async componentDidMount()  {
    try {
      const res = await axios.get('/api/skate-parks')
      this.setState({ skateParks: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  renderPopup(s){
    this.setState({ showPopup: true , latitude: s.locationLat, longitude: s.locationLng, name: s.name, image: s.image, id: s._id })
    return (
      null
    )
  }

  render() {
    const { viewport } = this.state
    
    return (
      this.state.skateParks.length > 0 && <MapGL {...viewport}
        mapboxApiAccessToken={mapboxToken}
        height={'100vh'}
        width={'100vw'}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={viewport => this.setState({ viewport })}>
        <div style={{ position: 'absolute', right: 0 }}>
          <NavigationControl />
        </div>

        <div style={{ position: 'absolute', bottom: 100, left: 20 }}>
          <ScaleControl maxWidth={100} unit={'metric'}/>
        </div>
      
        {this.state.skateParks.map(skatePark => (
          <Marker
            key={skatePark.name}
            latitude={skatePark.locationLat}
            longitude={skatePark.locationLng} 
          >
            <div onClick={()=> this.renderPopup( skatePark )}>🛹</div>
          </Marker>
        ))}
        {this.state.showPopup && <Popup
          closeButton={true}
          closeOnClick={false}
          onClose={() => this.setState({ showPopup: false })}
          longitude={this.state.longitude}
          latitude={this.state.latitude}
          className={'popup'}
          offset={{
            'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
          }}>
          
          <h2>{this.state.name}</h2>
          
          <figure className="image">
            <img src={this.state.image} alt={this.state.name} />
          </figure>
          
        </Popup> }    
      </MapGL>
     
    )
  }
}

export default Map