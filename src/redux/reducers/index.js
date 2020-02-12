import { COUNTRIES_LOADED } from '../constants'

const initialState = {
  remoteCountries: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES_LOADED:
      return Object.assign({}, state, {
        remoteCountries: state.remoteCountries.concat(action.payload)
      })
    default:
      return state
  }
}

export default rootReducer