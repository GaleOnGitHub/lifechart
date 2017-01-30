import React, { Component } from 'react'
import { Link } from 'react-router'

class NavButton extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const {path} = this.props
        if(path === '/chart'){
            return (<Link className="nav-button" to="/settings">Settings</Link>)
        }else{
            return (<Link className="nav-button" to="/chart">Back</Link>)
        }
    }
} 

export default NavButton