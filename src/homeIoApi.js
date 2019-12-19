import axios from 'axios'
import { API_PREFIX } from './config'

const login = (username, password) => {
  return axios.post(
    `${API_PREFIX}/login`,
    { username, password },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}

const getScripts = (token) => {
  return axios.get(
    `${API_PREFIX}/scripts`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
}

const getScript = (scriptId, token) => {
  return axios.get(
    `${API_PREFIX}/scripts/${scriptId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
}

const switchEnabled = (scriptId, token) => {
  return axios.post(
    `${API_PREFIX}/scripts/${scriptId}/switch_enabled`,
    { },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
}

const sendCode = (name, tag, code, token) => {
  return axios.post(
    `${API_PREFIX}/scripts`,
    { name, tag, code },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

const build = (scriptId, token) => {
  return axios.post(
    `${API_PREFIX}/scripts/${scriptId}/build`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export default {
  login,
  switchEnabled,
  getScripts,
  getScript,
  sendCode,
  build
}
