import { all, fork } from 'redux-saga/effects'
import { loginUser } from './user'

export default function * homeIoSaga () {
  yield all([
    fork(loginUser)
  ])
}
