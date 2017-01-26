import React, { Component } from 'react'

class HomePage extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.router.push('/setup')
  }
  render(){
    return (
      <div className="fullscreen">
        <div className="centered">
          <h1 className="logo logo-lg">Lifechart</h1>
          <p>a reminder to make the most of everyday</p>
          <button className="btn btn-trans" onClick={this.handleClick}>Start</button>
        </div>
      </div>
    )
  }
}

export default HomePage