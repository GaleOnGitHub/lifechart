import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import ChartDrawing from '../scripts/ChartDrawing'

class Diagram extends Component{
    constructor(props){
      super(props)
      this.chart = null
    }
    componentDidMount(){
      const { ageInUnits, lifeInUnits } = this.props
      this.chart = new ChartDrawing(ageInUnits,lifeInUnits)
      window.addEventListener('resize',() => this.chart.resize())
    }
    componentDidUpdate(){
      const { ageInUnits, lifeInUnits } = this.props
      this.chart.update(ageInUnits,lifeInUnits)
    }
    componentWillUnmount(){
      window.removeEventListener('resize', () => this.chart.resize())
    }

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
      <div className="">
        <canvas id="chart-canvas"/>
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