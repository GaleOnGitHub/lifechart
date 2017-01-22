import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { TIME_UNITS } from '../constants'
import Diagram from '../components/Diagram'
import DiagramDetails from '../components/DiagramDetails'
import Footer from '../components/Footer'

//possibly move to seperate file
const SubtractDates = (function(){
  const DateResult = function(value){
    const MS_PER_DAY = 1000*60*60*24
    this.value = value
    this.toYears  = () => { 
      return Math.floor(this.value/(MS_PER_DAY * 365.25)) 
    }
    this.toMonths = () => { 
      return Math.floor(this.value/(MS_PER_DAY * 365.25/12)) 
    }
    this.toWeeks  = () => { 
      return Math.floor(this.value/(MS_PER_DAY * 7)) 
    }
    this.toDays   = () => { 
      return Math.floor(this.value/(MS_PER_DAY)) 
    }
  }
  
  return (date2,date1) => {
    return new DateResult(date2-date1)
  }
})()

const convertDOBtoAge = (date, units) => {
  const now = new Date(),
        dob = new Date(date),
        age = SubtractDates(now,dob)
  switch(units){
    case TIME_UNITS.WEEKS:
      return age.toWeeks()
    case TIME_UNITS.MONTHS:
      return age.toMonths()
    case TIME_UNITS.YEARS:
    default:
      return age.toYears
  }
}

const convertYearsToUnit = (years, unit) => {
  switch(unit){  
    case TIME_UNITS.WEEKS:
      return years * 52
    case TIME_UNITS.MONTHS:
      return years * 12
    case TIME_UNITS.YEARS:
    default:
      return years
  }
}

class Chart extends Component {
  render(){
    const { age, lifespan, ageInUnits, lifeInUnits, units} = this.props
    return (
      <section>
        <header>
          <div><h1>{age} Years</h1></div>
          <DiagramDetails ageInUnits={ageInUnits} lifeInUnits={lifeInUnits} units={units} />
        </header>
        <Diagram ageInUnits={ageInUnits} lifeInUnits={lifeInUnits} />
        <Footer />
      </section>
    )
  }
}

Chart.PropTypes = {
    lifespan: PropTypes.number,
    units: PropTypes.string,
    ageInUnits: PropTypes.number,
    lifeInUnits: PropTypes.number    
}

const mapToProps = (state) => {
  const {lifespan, dob, units} = state.chart
  return {
    lifespan,
    units,
    ageInUnits: convertDOBtoAge(dob,units),
    lifeInUnits: convertYearsToUnit(lifespan)
  }
}

Chart = connect(mapToProps)(Chart)
export default Chart