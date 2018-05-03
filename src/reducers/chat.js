import { SET_CHAT_LIST } from '../constants/chatTypes'

const initialState = {
  chatList: []
}

export const chat = (state=initialState, action) => {
  switch(action.type) {
    case SET_CHAT_LIST:
      return {
        ...state,
        chatList: action.data
      }
    default:
      return state
  }
}