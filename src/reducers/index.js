import { combineReducers } from 'redux'
import authReducer from './authReducer'
import userReducer from './userReducer'
import codeReducer from './codeReducer'
import scriptsReducer from './scriptsReducer'

export default combineReducers({
  authReducer,
  userReducer,
  codeReducer,
  scriptsReducer
})
