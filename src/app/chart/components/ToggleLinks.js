import React from 'react'
import { TIME_UNITS } from '../constants'
import ToggleLink from '../containers/ToggleLink'

const ToggleLinks = () => (
    <div>
      Time: 
      {" "}
      <ToggleLink units={TIME_UNITS.YEARS}>
        Years
      </ToggleLink>
      {", "}
      <ToggleLink units={TIME_UNITS.MONTHS}>
        Months
      </ToggleLink>
      {", "}
      <ToggleLink units={TIME_UNITS.WEEKS}>
        Weeks
      </ToggleLink>
    </div>
)

export default ToggleLinks