import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { store } from './store'
import { loadUrlData, redirectNoData } from './middleware/routing'

import HomePage from './pages/HomePage'
import SetupPage from './pages/SetupPage'
import ChartPage from './pages/ChartPage'
import SettingsPage from './pages/SettingsPage'
import SetupForm from './chart/containers/SetupForm'
// import SettingsForm from './chart/containers/SettingsForm'

export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={HomePage} />
          <Route path="/setup" component={SetupPage}/>
          <Route path='/chart' component={ChartPage} onEnter={redirectNoData}/>
          <Route path="/chart/:dob/:lifespan" component={ChartPage} onEnter={loadUrlData}/>
          <Route path="/settings" component={SettingsPage} onEnter={redirectNoData}/>         
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