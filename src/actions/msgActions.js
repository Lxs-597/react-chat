import axios from 'axios'
import io from 'socket.io-client'
import {
  SET_MSG_LIST,
  SET_MSG_RECEIVED,
  SET_MSG_READED
} from '../constants/msgTypes'

const socket = io('ws://localhost:9001')

export const msgList = data => ({
  type: SET_MSG_LIST,
  data
})

export const msgReceived = msg => ({
  type: SET_MSG_RECEIVED,
  msg
})

export const getMsgList = () => {
  return dispatch => {
    axios.get('/user/getmsglist')
      .then(res => {
        if(res.status === 200 && res.data.code === 0) {
          dispatch(msgList(res.data.data))
        }
      })
  }
}

export const sendMessage = ({from, to, msg}) => {
  return dispatch => {
    socket.emit('message', {from, to, msg})
  }
}

export const receiveMsg = dispatch => {
  return dispatch => {
    socket.on('receive', data => {
      console.log('receove', data)
      dispatch(msgReceived(data))
    })
  }
}

