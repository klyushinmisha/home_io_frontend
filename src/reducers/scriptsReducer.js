const defaultState = {
  scripts: null,
  currentPage: 1
}

export default function scriptsReducer (state = defaultState, action) {
  switch (action.type) {
    case 'SET_SCRIPTS':
      console.log(action)
      return {
        ...state,
        scripts: action.payload.scripts.slice()
      }
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
