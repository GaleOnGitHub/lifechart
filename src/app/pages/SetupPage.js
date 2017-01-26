import React, { Component } from 'react'
import SetupForm from '../chart/containers/SetupForm'

class SetupPage extends Component {
  render(){
    return (
      <div className="fullscreen">
        <header className="topbar">
          <div>
            <span className="logo">Lifechart</span>
            <h1>Setup</h1>
          </div>
        </header>
        <main className="fullscreen-center">
          <SetupForm router={this.props.router}/>
        </main>
      </div>
    )
  }
}

export default SetupPage