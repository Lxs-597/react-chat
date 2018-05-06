import {
  SET_MSG_LIST,
  SET_MSG_RECEIVED,
  SET_MSG_READED
} from '../constants/msgTypes'

const initalState = {
  msgs: [],
  unread: 0
}

export const msgs = (state=initalState, action) => {
  switch(action.type) {
    case SET_MSG_LIST:
      return {
        ...state,
        msgs: action.data,
        unread: action.data.filter(msg => !msg.read).length
      }
    case SET_MSG_RECEIVED:
      return {
        ...state,
        msgs: [...state.msgs, action.msg],
        unread: state.unread + 1
      }
    case SET_MSG_READED:
    default:
      return state
  }
}