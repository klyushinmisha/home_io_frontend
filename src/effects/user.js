import { call, put, takeLatest } from 'redux-saga/effects'
import HomeIoApi from '../homeIoApi'

export function * loginUser (action) {
  yield takeLatest(
    'LOGIN',
    function * () {
      try {
        const { username, email } = action
        const user = yield call(HomeIoApi.login, username, email)
        yield put({
          type: 'LOGIN_SUCCEEDED',
          user: user
        })
      } catch (e) {
        yield put({
          type: 'LOGIN_FAILED',
          message: e.message
        })
      }
    }
  )
}
