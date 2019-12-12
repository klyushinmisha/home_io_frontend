import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

export default function LoginRequired (props) {
  const token = useSelector((state) => state.userReducer.token)
  const isLoggedIn = token !== null

  return (
    <>
      {isLoggedIn ? props.children : <Redirect to='/signIn' />}
    </>
  )
}
