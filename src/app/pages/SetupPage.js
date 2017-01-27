import React, { Component } from 'react'
import SetupForm from '../chart/containers/SetupForm'

class SetupPage extends Component {
  render(){
    return (
      <div className="fullscreen">

        <main className="fullscreen-center">
          <SetupForm router={this.props.router}/>
        </main>
      </div>
    )
  }
}

export default SetupPage