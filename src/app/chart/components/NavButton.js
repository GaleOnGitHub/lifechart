import React, { Component } from 'react'
import { Link } from 'react-router'

class NavButton extends Component {
    render(){
        const path = window.location.hash.split('/')[1] 
        console.log(path)
        if(path === 'settings'){
            return (<Link className="nav-button" to="/chart">Back</Link>)
        }else{
            return (<Link className="nav-button" to="/settings">Settings</Link>)
        }
    }
} 

export default NavButton