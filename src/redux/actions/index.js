import { COUNTRIES_LOADED, CONFIRM_USER } from '../constants'
import axios from 'axios'

export const getCountries = () => {
  return async dispatch => {
    try {
      let response = await axios.get('https://restcountries.eu/rest/v2/all')
      return dispatch({type: COUNTRIES_LOADED, payload: response.data})
    } catch(error) {
      return dispatch({type: 'COUNTRY_ERROR'})
    }
  }
}

export const confirmUser = payload => {
  return { type: CONFIRM_USER, payload}
}