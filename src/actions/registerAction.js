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
  const { user, pwd, repeat, identity } = state

  if(!user || !pwd) {
    return registerError('用户名密码不能为空！')
  }

  if(pwd !== repeat) {
    return registerError('两次密码输入必须一致！')
  }

  return dispatch => {
    axios.post('/user/register', {user, pwd, identity})
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(registerSuccess({user, pwd, identity}))
        } else {
          dispatch(registerError(res.data.msg))
        }
      })
  }
}