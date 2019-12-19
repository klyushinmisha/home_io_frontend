import homeIoApi from '../homeIoApi'
import store from '../store'

export function setCurrentPage (currentPage) {
  return {
    type: "SET_CURRENT_PAGE",
    payload: {
      currentPage: currentPage
    }
  }
}

export function setScripts (scripts) {
  return {
    type: "SET_SCRIPTS",
    payload: {
      scripts
    }
  }
}

export function setScriptId (scriptId) {
  return {
    type: "SET_SCRIPT_ID",
    payload: {
      scriptId
    }
  }
}

export function switchEnabled (scriptId, token) {
  return async (dispatch) => {
    await homeIoApi.switchEnabled(scriptId, token)
    dispatch({
      type: "SWITCH_ENABLED",
      payload: { scriptId }
    })
  }
}

export function loadScript (scriptId) {
  return async (dispatch) => {
    const state = store.getState()
    const token = state.userReducer.token
    const resp = await homeIoApi.getScript(scriptId, token)
    dispatch({
      type: "LOAD_SCRIPT",
      payload: { script: resp.data }
    })
  }
}
