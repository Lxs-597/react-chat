import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_ERROR } from '../constants/registerTypes'

const registerSuccess = data => ({
  type: REGISTER_SUCCESS,
  data
})

const registerError = msg => ({
  type: REGISTER_ERROR,
  msg
})

export const register = state => {
  const { user, pwd, repeat, indentity } = state

  if(!user || !pwd) {
    return registerError('用户名密码不能为空！')
  }

  if(pwd !== repeat) {
    return registerError('两次密码输入必须一致！')
  }

  return dispatch => {
    axios.post('/register', {user, pwd, indentity})
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(registerSuccess({user, pwd, indentity}))
        } else {
          dispatch(registerError(res.data.msg))
        }
      })
  }
}