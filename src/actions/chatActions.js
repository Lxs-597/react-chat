import axios from 'axios'
import { SET_CHAT_LIST } from '../constants/chatTypes'

export const setChatList = data => ({
  type: SET_CHAT_LIST,
  data
})

export const getChatList = identity => {
  return dispatch => {
    axios.get(`/user/list?identity=${identity}`)
      .then(res => {
        if (res.data.code === 0) {
          dispatch(setChatList(res.data.data))
        }
      })
      .catch(e => console.log(e))
  }
}