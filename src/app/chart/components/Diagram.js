import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import ChartDrawing from '../scripts/ChartDrawing'
import { debounce } from '../scripts/utils'

class Diagram extends Component{
    constructor(props){
      super(props)
      this.chart = null
    }
    componentDidMount(){
      //create chart and add listener for resize
      const { ageInUnits, lifeInUnits } = this.props
      this.chart = new ChartDrawing(ageInUnits,lifeInUnits)
      window.addEventListener('resize',debounce(this.chart.resize,100))
    }
    componentDidUpdate(){
      //update chart when props change
      const { ageInUnits, lifeInUnits } = this.props
      this.chart.update(ageInUnits,lifeInUnits)
    }
    componentWillUnmount(){
      //remove event listener
      window.removeEventListener('resize',debounce(this.chart.resize,100))
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