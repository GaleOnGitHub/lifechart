import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import chartApp from './chart/reducers'

const store = createStore(chartApp)

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

const Chart = () => (<h1>CHART</h1>)
const Settings = () => (<h1>SETTINGS</h1>)
const Setup = () => (<h1>SETUP</h1>)