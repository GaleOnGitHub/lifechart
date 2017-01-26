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
      <div>
        <h1>Lifechart</h1>
        <p>a reminder to make the most of everyday</p>
        <button onClick={this.handleClick}>Start</button>
      </div>
    )
  }
}

export default HomePage