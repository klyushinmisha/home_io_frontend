import React from 'react'

import './LoginNav.scss'
import SignInButton from './SignInButton/SignInButton.jsx'

export default function LoginNav () {
  return (
    <ul className='login-nav navbar-nav'>
      <li className='nav-item active'>
        <a className='nav-link active' href='/login'>
          Вход
        </a>
      </li>
      <SignInButton />
    </ul>
  )
}
