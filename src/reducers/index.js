import { combineReducers } from 'redux'
import login from './user'
import userReducer from './userReducer'
import codeReducer from './codeReducer'
import scriptsReducer from './scriptsReducer'

export default combineReducers({
  login,
  userReducer,
  codeReducer,
  scriptsReducer
})
