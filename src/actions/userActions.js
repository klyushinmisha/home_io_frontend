export default function userInit (token, username, email, avatarUrl) {
  return {
    type: 'USER_INIT',
    token: token,
    username: username,
    email: email,
    avatarUrl: avatarUrl
  }
}
