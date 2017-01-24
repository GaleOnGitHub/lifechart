import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import chartApp from './chart/reducers'

import Chart from './chart/containers/Chart'
import SetupForm from './chart/containers/SetupForm'
import SettingsForm from './chart/containers/SettingsForm'

const initialState = {
  chart: {
    dob: '1990-02-25',
    lifespan: 82,
    units: "YEARS",
    country: 'Canada'
  }
}
const store = createStore(chartApp, initialState)

export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/">
            <IndexRoute component={Chart} />
            <Route path="/settings" component={SettingsForm} />
          </Route>
          <Route path="/setup" component={SetupForm}/>
        </Router>
      </Provider>
    )
  }
}

// const Chart = () => (<h1>CHART</h1>)
// const Settings = () => (<h1>SETTINGS</h1>)
const Setup = () => (<h1>SETUP</h1>)