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
        <div className="fullscreen-center">
          <div className="home-title">
            <h1>Lifechart</h1>
            <p>a reminder to make the most of every day</p>
          </div>
          <button className="btn btn-clear" onClick={this.handleClick}>Start</button>
        </div>
      </div>
    )
  }
}

export default HomePage