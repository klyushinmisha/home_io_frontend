import { handleActions } from 'redux-actions'

const defaultState = {
  isFetching: false
}

export default handleActions({
  SET_IS_FETCHING: (state, action) => {
    return {
      ...state,
      isFetching: action.payload.isFetching
    }
  }
}, defaultState)
