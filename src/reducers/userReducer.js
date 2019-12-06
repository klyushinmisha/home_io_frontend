
const defaultState = {
  token: '',
  username: '',
  email: '',
  avatarUrl: ''
}

export default function userReducer (state = defaultState, action) {
  switch (action.type) {
    case 'USER_INIT':
      return {
        ...state,
        token: action.token,
        username: action.username,
        email: action.email,
        avatarUrl: action.avatarUrl
      }
    default:
      return {
        ...state
      }
  }
}
