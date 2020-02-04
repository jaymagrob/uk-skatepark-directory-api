import React from 'react'
import axios from 'axios'

import SkateCard from './SkateCard'

class SkateIndex extends React.Component {
  state = {
    skateParks: []
  }

  async componentDidMount()  {
    try {
      const res = await axios.get('/api/skate-parks')
      this.setState({ skateParks: res.data })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    console.log(this.state.skateParks)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.skateParks.map(skatePark =>( 
              <SkateCard key={skatePark._id} {...skatePark} />
            ))}
          </div>
        </div>
      </section>
      
    )
  }
 
 


}

export default SkateIndex
