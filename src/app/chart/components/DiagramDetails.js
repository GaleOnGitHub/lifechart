import React, { PropTypes } from 'react'

const DiagramDetails = ({ageInUnits, lifeInUnits, units}) => (
    <div>
      <p>{ageInUnits} of {lifeInUnits} {units}</p>
    </div>
)

DiagramDetails.PropTypes = {
  ageInUnits: PropTypes.number,
  lifeInUnits: PropTypes.number,
  units: PropTypes.string
}

export default DiagramDetails
