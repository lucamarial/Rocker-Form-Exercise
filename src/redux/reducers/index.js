import { combineReducers } from 'redux'
import countryReducer from './countryReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  countryReducer: countryReducer,
  userReducer: userReducer
})

export default rootReducer