import React from 'react'
import axios from 'axios'

import SmallMap from '../maps/SmallMap'

class SkateShow extends React.Component {
  state = {
    skatePark: {}
  }

  async componentDidMount()  {
    try {
      const res = await axios.get(`/api/skate-parks/${this.props.match.params.id}`)
      this.setState({ skatePark: res.data })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    
    return (
      <div className="container">

        <section className="section">
          <div className="tile is-ancestor">
            <div className="tile">
              <div className="box width-full">        
                <div className="title is-3">Location</div>                
                <SmallMap {...this.state.skatePark}/>
              </div>
            </div>
            <div className="tile">
              <div className="box">
                <div className="title is-3">{this.state.skatePark.name}</div>                
                <figure className="image">
                  <img src={this.state.skatePark.image} alt={name} />
                </figure>
                <p>{this.state.skatePark.detail}</p>                
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="box">
            HOLD FOR COMMENTS
          </div>
        </section>
      </div>
    )
  }
 
 


}

export default SkateShow




