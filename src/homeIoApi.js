import axios from 'axios'
import { API_PREFIX } from './config'

export default class HomeIoApi {
  static async login (username, password) {
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
}
