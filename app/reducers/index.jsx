import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  pokemon: require('./pokemon').default,  
})

export default rootReducer
