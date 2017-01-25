import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { store } from './store'
import { loadUrlData, redirectNoData } from './middleware/routing'

import MainLayout from './layouts/MainLayout'
import Chart from './chart/containers/Chart'
import SetupForm from './chart/containers/SetupForm'
import SettingsForm from './chart/containers/SettingsForm'

export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Home} />
          <Route path='/chart' component={Chart} onEnter={redirectNoData}/>
          <Route path="/chart/:dob/:lifespan" component={Chart} onEnter={loadUrlData}/>
          <Route path="/settings" component={SettingsForm} onEnter={redirectNoData}/>         
          <Route path="/setup" component={SetupForm}/>
          <Route path="*" component={NotFound} />
        </Router>
      </Provider>
    )
  }
}

const NotFound = () => (
  <div>
    <h1>404 Error</h1>
    <p>Looks like this page doesn't exist.</p>
  </div>
)

const Home = () => (
  <h1>HOME</h1>
)