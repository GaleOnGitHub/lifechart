import { UPDATE, TOGGLE_UNITS } from '../actions'
import { combineReducers } from 'redux'

function chart(state = {}, action){
  switch(action.type){
    case UPDATE:
      return action.chart
    case TOGGLE_UNITS:
      return Object.assign({}, state, {
        units: action.units
      })
    default:
      return state
  }
}

const chartApp = ({
  chart
})

export default chartApp