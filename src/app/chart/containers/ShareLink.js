import React, { Component } from 'react'
import { connect } from 'react-redux'
import Clipboard from 'clipboard'

const mapStateToProps = (state) => {
  const { dob, lifespan } = state.chart
  const origin = window.location.origin
  const pathname  = window.location.pathname
  const hash = "/#/chart/"+dob+"/"+lifespan
  const url = origin + pathname + hash
  return { 
    url 
  }
}

class ShareLink extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    new Clipboard('.sharelink-btn')    
  }
  render(){
    const { url } = this.props
    return (
      <div className="sharelink">
        <input id="share-link" value={(url ? url : "")} readOnly/>
        <button className="sharelink-btn" data-clipboard-target="#share-link">Copy</button>
      </div>
    )
  }
}

ShareLink = connect(mapStateToProps)(ShareLink)
export default ShareLink;
