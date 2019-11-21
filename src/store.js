import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import homeIoSaga from './effects'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(
    sagaMiddleware
  )
)

sagaMiddleware.run(homeIoSaga)

export default store
