import { store } from '../store'
import { update } from '../chart/actions'

export const loadUrlData = (nextState,replace) => {
  const { dob, lifespan } = nextState.params
  store.dispatch(update(dob,lifespan,"Custom","MONTHS"))
}

export const redirectNoData = (nextState, redirect) => {
  const chart = store.getState().chart
  if(Object.keys(chart).length === 0){
    redirect('/setup')
  }
}