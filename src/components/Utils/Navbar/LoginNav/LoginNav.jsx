import React from 'react'

import './LoginNav.scss'
import SignInButton from './SignInButton/SignInButton.jsx'
import { useHistory } from 'react-router'

export default function LoginNav () {
  const history = useHistory()

  return (
    <ul className='login-nav navbar-nav'>
      <li className='nav-item active'>
        <a
          className='nav-link active'
          onClick={() => history.push('/signIn')}
        >
          Вход
        </a>
      </li>
      <SignInButton />
    </ul>
  )
}
