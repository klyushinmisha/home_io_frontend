export default function user (state = {}, action) {
  switch (action.type) {
    case 'LOGIN_SUCCEEDED':
      return {
        ...state,
        user: action.user
      }
    case 'LOGIN_FAILED':
      // TODO: throw error somehow
      return state
    default:
      return state
  }
}
