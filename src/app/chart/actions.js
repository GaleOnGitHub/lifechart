// chart/actions.js
export const UPDATE = "chart/UPDATE"
export const TOGGLE_UNITS = "chart/TOGGLE_UNITS"

export const update = (dob, lifespan, country, units) => {
  return {
    type: UPDATE,
    chart: {
      dob,
      lifespan,
      country,
      units
    }
  }
}

export const toggleUnit = (units) => {
  return {
    type: TOGGLE_UNITS,
    units
  }
}