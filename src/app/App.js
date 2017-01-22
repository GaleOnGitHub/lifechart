import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import chartApp from './chart/reducers'

import Chart from './chart/containers/Chart'

const initialState = {
  chart: {
    dob: 'Feb 25 1990',
    lifespan: 82,
    units: "YEARS"
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
            <Route path="/settings" component={Settings} />
          </Route>
          <Route path="/setup" component={Setup}/>
        </Router>
      </Provider>
    )
  }
}

// const Chart = () => (<h1>CHART</h1>)
const Settings = () => (<h1>SETTINGS</h1>)
const Setup = () => (<h1>SETUP</h1>)