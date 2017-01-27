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
    return (
      <div className="chart-body">
        <canvas id="chart-canvas" className="chart-diagram"/>
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