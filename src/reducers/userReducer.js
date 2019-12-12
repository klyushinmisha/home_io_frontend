const getToken = () => {
  // eslint-disable-next-line
  return localStorage.getItem('token')
}

const defaultState = {
  token: getToken(),
  username: '',
  email: '',
  avatarUrl: ''
}

export default function userReducer (state = defaultState, action) {
  switch (action.type) {
    case 'USER_INIT':
      return {
        ...state,
        ...action.payload
      }
    default:
      return {
        ...state
      }
  }
}
