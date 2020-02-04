import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  state = {
    data: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    error: {
      username: '',
      email: '',
      password: ''
    }
  }

   handleSubmit = async e => {
     e.preventDefault()
     try {
       await axios.post('api/register', this.state.data)
       this.props.history.push('/login')
     } catch (err) {
       const error = { ...this.state.errors, 
         username: err.response.data.errors.username,
         email: err.response.data.errors.email,
         password: err.response.data.errors.password
       }
       this.setState({ error })
     }
   }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  render() {
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter card">
              <h2 className="title">Register</h2>
              <div className="field">
                <label className="label">Usename</label>
                {this.state.error.username && <h3 className="is-warning">{this.state.error.username}</h3>}
                <div className="control">
                  <input
                    className="input"
                    placeholder="Username"
                    name="username"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                {this.state.error.email && <h3 className="is-warning">{this.state.error.email}</h3>}
                <div className="control">
                  <input
                    className="input"
                    placeholder="Email"
                    name="email"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                {this.state.error.password && <h3 className="is-warning">{this.state.error.password}</h3>}
                <div className="control">
                  <input
                    className="input"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Password Confirmation"
                    type="password"
                    name="passwordConfirmation"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth is-danger">Register Me</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }


}

export default Register