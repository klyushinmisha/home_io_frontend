import React from 'react'

import './SignInButton.scss'
import { useHistory } from 'react-router'

export default function SignInButton () {
  const history = useHistory()

  return (
    <button
      className='btn signin-btn'
      onClick={() => history.push('/signUp')}
    >
      Регистрация
    </button>
  )
}
