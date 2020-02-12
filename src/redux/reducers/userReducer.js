import { CONFIRM_USER } from '../constants'

const initialState = {
  user: [
    {
      ssn: '',
      phone: '',
      email: '',
      country: ''
    }
  ]
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRM_USER:
      return Object.assign({}, state, {
        user: [
          ...state.user,
          {
            ssn: action.payload.ssn,
            phone: action.payload.phone,
            email: action.payload.email,
            country: action.payload.country
          }
        ]
      })
    default:
      return state
  }
}

export default userReducer