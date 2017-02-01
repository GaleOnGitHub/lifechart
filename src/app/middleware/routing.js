import { store } from '../store'
import { update } from '../chart/actions'

export const loadUrlData = (nextState, replace) => {
  const { dob, lifespan } = nextState.params
  const reDate = /^(19|20)[0-9]{2}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/ //yyyy-mm-dd
  const reAge = /^(100|[0-9][1-9])$/ //age 01 to 100
  if(!reDate.test(dob) && !reAge.test(lifespan)){
    replace('/')
  }  
  store.dispatch(update(dob,lifespan,"Custom","YEARS"))
}

export const redirectNoData = (nextState, redirect) => {
  const chart = store.getState().chart
  if(!chart){
    redirect('/')
  }
}