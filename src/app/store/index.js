import { createStore, applyMiddleware } from 'redux'
import chartApp from '../chart/reducers'
import { saveToSessionStorage } from '../middleware/store'

//initial state
const getInitialState = () => {
  const save = sessionStorage.getItem('chart')
  const chart = JSON.parse(save)  
  return {chart}
}

export const store = createStore(
  chartApp, 
  getInitialState(), 
  applyMiddleware(saveToSessionStorage)
  );