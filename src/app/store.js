import { createStore } from 'redux'
import chartApp from './chart/reducers'

export const store = createStore(chartApp);