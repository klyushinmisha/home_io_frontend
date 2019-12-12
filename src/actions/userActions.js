export default function userInit (token, username) {
  return {
    type: 'USER_INIT',
    payload: {
      token: token,
      username: username
    }
  }
}
