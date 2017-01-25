import React, { Component } from 'react'
import SetupForm from '../chart/containers/SetupForm'

class SetupPage extends Component {
  render(){
    return (
      <div>
        <header>
          <div>
            <span>Lifechart</span>
            <h1>Setup</h1>
          </div>
        </header>
        <main>
          <SetupForm router={this.props.router}/>
        </main>
      </div>
    )
  }
}

export default SetupPage