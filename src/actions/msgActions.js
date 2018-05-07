import axios from 'axios'
import io from 'socket.io-client'
import {
  SET_MSG_LIST,
  SET_MSG_RECEIVED,
  SET_MSG_READED
} from '../constants/msgTypes'

const socket = io('ws://localhost:9001')

export const msgList = ({msgs, users, userid}) => ({
  type: SET_MSG_LIST,
  msgs,
  users,
  userid
})

export const msgReceived = (msg, userid) => ({
  type: SET_MSG_RECEIVED,
  msg,
  userid
})

export const getMsgList = () => {
  return (dispatch, getState) => {
    axios.get('/user/getmsglist')
      .then(res => {
        if(res.status === 200 && res.data.code === 0) {
          const userid = getState().user._id
          dispatch(msgList({msgs: res.data.data, users: res.data.users, userid}))
        }
      })
  }
}

export const sendMessage = ({from, to, msg}) => {
  return dispatch => {
    socket.emit('message', {from, to, msg})
  }
}

export const receiveMsg = () => {
  return (dispatch, getState) => {
    socket.on('receive', data => {
      const userid = getState().user._id && getState().user._id
      console.log(userid)
      dispatch(msgReceived(data, userid))
    })
  }
}

