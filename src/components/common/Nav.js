import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to='/'>🛹Home🛹</Link>
        </div>
        <div className="navbar-menu">
          <div className='navbar-end'>
            <Link className="navbar-item" to='/skate-park'>List Skate Parks</Link>
            <Link className="navbar-item" to='/map'>Map Skate Parks</Link>
            <Link className="navbar-item" to='/skate-park/new'>Create Skate Park</Link>
            <Link className="navbar-item" to='/login'>Login</Link>
            <Link className="navbar-item" to='/register'>Register</Link>
          </div>          
        </div>
      </nav>
    )
  }
}

export default withRouter(Nav)