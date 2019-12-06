const defaultState = {
  scripts: ['script1', 'script2','script3','script4','script5','script6','script7',],
  currentPage: 1,
  scriptsOnPage: 3,
  totalScriptsCount: 7
}

export default function scriptsReducer (state = defaultState, action) {
  switch (action.type) {
    case 'SET_SCRIPTS':
      return {
        ...state,
        ...state.scripts
      }
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.currentPage
      }
    default:
      return {
        ...state
      }
  }
}
