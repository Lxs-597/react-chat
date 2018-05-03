import { SET_USER_INFO, SET_USER_INFO_ERR, CLEAR_USER_INFO } from '../constants/userTypes'
import axios from 'axios'

export const setUserInfo = data => ({
  type: SET_USER_INFO,
  data
})

export const setUserInfoErr = msg => ({
  type: SET_USER_INFO_ERR,
  msg
})

export const clearUserInfo = () => ({
  type: CLEAR_USER_INFO
})

export const login = state => {
  const { user, pwd } = state

  if (!user || !pwd) {
    return setUserInfoErr('用户名密码不能为空！')
  }

  return dispatch => {
    axios.post('/user/login', {user, pwd})
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(setUserInfo(res.data.data))
        } else {
          dispatch(setUserInfoErr(res.data.msg))
        }
      })
  }
}

export const register = state => {
  const { user, pwd, repeat, identity } = state

  if (!user || !pwd) {
    return setUserInfoErr('用户名密码不能为空！')
  }

  if (pwd !== repeat) {
    return setUserInfoErr('两次密码输入必须一致！')
  }

  return dispatch => {
    axios.post('/user/register', {user, pwd, identity})
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(setUserInfo(res.data.data))
        } else {
          dispatch(setUserInfoErr(res.data.msg))
        }
      })
  }
}

export const update = state => {
  return dispatch => {
    axios.post('/user/update', state)
      .then(res => {
        if (res.status === 200 && res.data.code === 0 ) {
          dispatch(setUserInfo(res.data.data))
        } else {
          dispatch(setUserInfoErr(res.data.msg))
        }
      })
  }
}