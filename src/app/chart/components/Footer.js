import React from 'react'
import ToggleLinks from './ToggleLinks'

const Footer = () => (
  <footer>
    <ToggleLinks/>
    <div className="chart-legend">
      <ul className="legend">
        <li>
          <div className="legend-item legend-past"></div> Past
        </li>
        <li>
          <div className="legend-item legend-now"></div> Now
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer