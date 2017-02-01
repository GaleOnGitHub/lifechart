import { UPDATE } from './chart/actions'

export const saveToSessionStorage = store => next => action => {
  const result = next(action)
  if(result.type = UPDATE){ //only save on chart update
    const chart = store.getState().chart
    const save = JSON.stringify(chart)
    sessionStorage.setItem('chart', save)
  }
  return result
}