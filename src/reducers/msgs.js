import {
  SET_MSG_LIST,
  SET_MSG_RECEIVED,
  SET_MSG_READED
} from '../constants/msgTypes'

const initalState = {
  msgs: [],
  unread: 0,
  users: {}
}

export const msgs = (state=initalState, action) => {
  switch(action.type) {
    case SET_MSG_LIST:
      return {
        ...state,
        msgs: action.msgs,
        unread: action.msgs.filter(msg => !msg.read && msg.to === action.userid).length,
        users: action.users
      }
    case SET_MSG_RECEIVED:
      const num = action.msg.to === action.userid ? 1 : 0
      console.log(action)
      return {
        ...state,
        msgs: [...state.msgs, action.msg],
        unread: state.unread + num
      }
    case SET_MSG_READED:
    default:
      return state
  }
}