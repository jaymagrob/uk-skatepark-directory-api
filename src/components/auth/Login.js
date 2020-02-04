import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

class Login extends React.Component {
 state = {
   data: {
     email: '',
     password: ''
   }
 }
 handleChange = ({ target: { name, value } }) => {
   const data = { ...this.state.data, [name]: value }
   this.setState({ data })
 }

 clearToken = () => {
   Auth.removeToken()
 }

 handleSubmit = async e => {
   e.preventDefault()
   try {
     const res =  await axios.post('api/login', this.state.data)
     Auth.setToken(res.data.token)
     this.props.history.push('/skate-park')
   } catch (err) {
     console.log(err)
   }
 }
 render() {
   return (
     <section className="section">
       <div className="container">
         <div className="columns">
           <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter card">
             <h2 className="title">Login</h2>
             <div className="field">
               <label className="label">Email</label>
               <div className="control">
                 <input
                   className="input"
                   name="email"
                   placeholder="Email"
                   onChange={this.handleChange}
                 />
               </div>
             </div>
             <div className="field">
               <label className="label">Password</label>
               <div className="control">
                 <input
                   className="input"
                   type="password"
                   name="password"
                   placeholder="Password"
                   onChange={this.handleChange}
                 />
               </div>
             </div>
             <button type="submit" className="button is-danger is-fullwidth">Login</button>
           </form>
         </div>
       </div>
       <button onClick={this.clearToken}>Click</button>
     </section>
   )
 }
}
export default Login