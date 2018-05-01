import { REGISTER_SUCCESS, REGISTER_ERROR } from '../constants/registerTypes'

const initialState = {
  isAuth: false,
  msg: '',
  user: '',
  pwd: '',
  indentity: '',
}

export const user = (state=initialState, action) => {
  switch(action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        msg: '',
        ...action.data
      }
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