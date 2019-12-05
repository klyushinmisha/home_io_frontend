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
  sendCode,
  build
}
