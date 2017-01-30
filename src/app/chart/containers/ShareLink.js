import React, { Component } from 'react'
import { connect } from 'react-redux'
import Clipboard from 'clipboard'

const mapStateToProps = (state) => {
  const { dob, lifespan } = state.chart
  const origin = window.location.origin
  const url = origin +"/"+dob+"/"+lifespan
  return { 
    url 
  }
}

class ShareLink extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    new Clipboard('.btn-copy')    
  }
  render(){
    const { url } = this.props
    return (
      <div>
        <input id="share-link" value={(url ? url : "")} readOnly/>
        <button className="btn-copy" data-clipboard-target="#share-link">Copy</button>
      </div>
    )
  }
}

ShareLink = connect(mapStateToProps)(ShareLink)
export default ShareLink;
