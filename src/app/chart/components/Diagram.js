import React, { PropTypes } from 'react'

const Diagram = ({ageInUnits,lifeInUnits}) => (
  <div>
    {ageInUnits},{lifeInUnits}
  </div>
)

Diagram.PropTypes = {
  ageInUnits: PropTypes.number,
  lifeInUnits: PropTypes.number,
  units: PropTypes.string
}

export default Diagram