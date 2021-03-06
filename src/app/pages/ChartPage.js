import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import MainLayout from './layouts/MainLayout'
import { TIME_UNITS } from '../chart/constants'
import Diagram from '../chart/components/Diagram'
import Footer from '../chart/components/Footer'
import ShareLink from '../chart/containers/ShareLink'
import SubtractDates from '../scripts/SubtractDates'


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
      return age.toYears()
  }
}

const convertYearsToUnit = (years, unit) => {
  switch(unit){  
    case TIME_UNITS.WEEKS:
      return Math.floor(years * 365.25/7)
    case TIME_UNITS.MONTHS:
      return years * 12
    case TIME_UNITS.YEARS:
    default:
      return years
  }
}

const mapStateToProps = (state) => {
  const {lifespan, dob, units} = state.chart
  const ageInUnits = convertDOBtoAge(dob,units)
  const lifeInUnits = convertYearsToUnit(lifespan, units)
  const title = ageInUnits+" of "+lifeInUnits+" "+units.toLowerCase()
  return {
    title, 
    ageInUnits,
    lifeInUnits,
  }
}

const renderError = (message) => (
  <h2>
    {message}{" "}
    Try updating your <Link to="/settings">settings</Link>.
  </h2>
)

class ChartPage extends Component {
  render(){
    const {title, ageInUnits, lifeInUnits, location} = this.props
    let error = null
    if(ageInUnits > lifeInUnits) //Older than expected
      error = "You've' lived longer than this life expectancy!"      
    if(ageInUnits < 0) //Negative age
      error = "Wow! Looks like you were born in the future."
    return (
      <MainLayout title={title}>
      {error ? ( //if error
        renderError(error)
      ):( //else
        <div className="chart">
          <ShareLink />
          <Diagram ageInUnits={ageInUnits} lifeInUnits={lifeInUnits} />
          <Footer />
        </div> 
      )}
      </MainLayout>
    )
  }
}

ChartPage.PropTypes = {
  title: PropTypes.string,
  ageInUnits: PropTypes.number,
  lifeInUnits: PropTypes.number
}

ChartPage = connect(mapStateToProps)(ChartPage);
export default ChartPage

