const defaultState = {
  scripts: null,
  script: null,
  currentPage: 1
}

export default function scriptsReducer (state = defaultState, action) {
  let scriptId
  let scripts
  let script
  switch (action.type) {
    case 'SET_SCRIPTS':
      return {
        ...state,
        scripts: action.payload.scripts.slice()
      }
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        ...action.payload
      }
    case 'SWITCH_ENABLED':
      scriptId = action.payload.scriptId
      scripts = state.scripts.slice()
      script = scripts.filter(s => s.id === scriptId)[0]
      script.enabled = !script.enabled
      return {
        ...state,
        scripts
      }
    case 'SET_SCRIPT_ID':
      return {
        ...state,
        script: null,
        ...action.payload
      }
    case 'LOAD_SCRIPT':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
