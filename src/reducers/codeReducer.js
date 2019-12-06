const defaultState = {
  code: '# Write your code here'
}

export default function codeReducer (state = defaultState, action) {
  switch (action.type) {
    case 'SET_CODE':
      return {
        ...state,
        code: action.code
      }
    default:
      return {
        ...state
      }
  }
}
