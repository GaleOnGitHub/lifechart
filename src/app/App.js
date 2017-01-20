import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'


export default class App extends Component {
  render(){
    return (
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRoute component={Chart} />
          <Route path="/settings" component={Settings} />
        </Route>
        <Route path="/setup" component={Setup}/>
      </Router>
    )
  }
}

const Chart = () => (<h1>CHART</h1>)
const Settings = () => (<h1>SETTINGS</h1>)
const Setup = () => (<h1>SETUP</h1>)