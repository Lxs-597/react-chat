import { combineReducers } from 'redux'
import { user } from './user'
import { chat } from './chat'
import { msgs } from './msgs'

export default combineReducers({
  user,
  chat,
  msgs
})