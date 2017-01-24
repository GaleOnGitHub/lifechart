import { createStore, applyMiddleware } from 'redux'
import chartApp from './chart/reducers'
import { UPDATE, update } from './chart/actions'

//initial state
const getInitialState = () => {
  const save = sessionStorage.getItem('chart')
  const chart = JSON.parse(save)
  
  return {chart}
}

//middleware
const saveToSessionStorage = store => next => action => {
  const result = next(action)
  if(result.type = UPDATE){ //only save on chart update
    const chart = store.getState().chart
    const save = JSON.stringify(chart)
    sessionStorage.setItem('chart', save)
  }
  return result
}

export const store = createStore(chartApp, getInitialState(), applyMiddleware(saveToSessionStorage));