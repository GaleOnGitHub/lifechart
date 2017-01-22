import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class Diagram extends Component{
  render(){
    const {ageInUnits, lifeInUnits } = this.props
    if(ageInUnits > lifeInUnits){ //Older than expected
      return (
        <h2>
          You've' lived longer than this life expectancy!<br/>
          Try updating your <Link to="/settings">settings</Link>.
        </h2>
      )
    }
    if(ageInUnits < 0){ //Negative age
      return (
        <h2>
          Wow! Looks like you were born in the future.<br/>
          Try updating your <Link to="/settings">settings</Link>.
        </h2>
      )
    }
    return (
      <div>
        {ageInUnits},{lifeInUnits}
      </div>
    )
  }
}

Diagram.PropTypes = {
  ageInUnits: PropTypes.number,
  lifeInUnits: PropTypes.number,
  units: PropTypes.string
}

export default Diagram