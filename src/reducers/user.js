import { SET_USER_INFO, SET_USER_INFO_ERR, CLEAR_USER_INFO } from '../constants/userTypes'
import { getRedirectPath } from '../utils/redirectPath'

const initialState = {
  redirectTo: '',
  msg: '',
  user: '',
  identity: '',
}

export const user = (state=initialState, action) => {
  switch(action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        redirectTo: getRedirectPath(action.data),
        msg: '',
        ...action.data
      }
    case SET_USER_INFO_ERR:
      return {
        ...state,
        msg: action.msg,
      }
    case CLEAR_USER_INFO:
      return {
        ...initialState,
        redirectTo: '/'
      }
    default:
      return state
  }
}