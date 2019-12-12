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
      scripts: scripts
    }
  }
}
