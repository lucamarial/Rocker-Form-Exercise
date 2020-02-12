import { combineReducers } from 'redux'
import countryReducer from './countryReducer'

const rootReducer = combineReducers({
  countryReducer: countryReducer
})

export default rootReducer