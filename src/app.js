import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'
import './styles/main.scss'

import Login from './components/auth/Login'
import Register from './components/auth/Register'

import SkateCreate from './components/skate-parks/SkateCreate'
import SkateIndex from './components/skate-parks/SkateIndex'
import SkateShow from './components/skate-parks/SkateShow'
import SkateUpdate from './components/skate-parks/SkateUpdate'
import MapBig from './components/maps/BigMap'

import Nav from './components/common/Nav'
import Home from './components/common/Home'
import ErrorPage from './components/common/Error'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/skate-park/:id/edit" component={SkateUpdate} />
            <Route path="/skate-park/new" component={SkateCreate} />
            <Route path="/skate-park/:id" component={SkateShow} />          
            <Route path="/skate-park" component={SkateIndex} />
            <Route path="/map" component={MapBig} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/*" component={ErrorPage} /> 
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)