import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import SkateForm from './SkateForm'

class SkateCreate extends React.Component {
  state = {
    data: {
      locationLat: '',
      locationLng: '',
      detail: '',
      material: '',
      indoor: '',
      image: '',
      cose: '',
      region: '',
      name: ''
    }
  }


  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit = async e => {    
    e.preventDefault()
    try {
    
      const res = await axios.post('api/skate-parks', this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push(`/skate-parks/${res.data._id}`)
    } catch (err) {
      console.log(err.response)
    }
  }
  render() {
    console.log(this.state.data)
    return (
      <section className="section">
        <div className="container">
          <SkateForm 
            data={this.state.data}
            handleChange={this.handleChange}
            handleLocationChange={this.handleLocationChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}
export default SkateCreate
