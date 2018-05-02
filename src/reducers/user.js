import { REGISTER_SUCCESS, REGISTER_ERROR } from '../constants/registerTypes'
import { LOGIN_SUCCESS, LOGIN_ERROR, LOAD_USER_INFO } from '../constants/loginTypes'
import { getRedirectPath } from '../utils/redirectPath'

const initialState = {
  isAuth: false,
  redirectTo: '',
  msg: '',
  user: '',
  identity: '',
}

export const user = (state=initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        redirectTo: getRedirectPath(action.data),
        msg: '',
        ...action.data
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        redirectTo: getRedirectPath(action.data),
        msg: '',
        ...action.data
      }
    case LOAD_USER_INFO: 
      return {
        ...state,
        ...action.data
      }
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      return {
        ...state,
        isAuth: false,
        msg: action.msg
      }
    default:
      return state
  }
}