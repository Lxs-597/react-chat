import { LOGIN_SUCCESS, LOGIN_ERROR, LOAD_USER_INFO } from '../constants/loginTypes'
import axios from 'axios'

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  data
})

export const loginError = msg => ({
  type: LOGIN_ERROR,
  msg
})

export const loadUserInfo = data => ({
  type: LOAD_USER_INFO,
  data
})

export const login = state => {
  const { user, pwd } = state

  if (!user || !pwd) {
    return loginError('用户名密码不能为空！')
  }

  return dispatch => {
    axios.post('/user/login', { user, pwd })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(loginSuccess(res.data.data))
        } else {
          dispatch(loginError(res.data.msg))
        }
      })
  }
}