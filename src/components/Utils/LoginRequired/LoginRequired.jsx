import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

export default function LoginRequired (props) {
  const user = useSelector((state) => state.user)
  const isLoggedIn = Object.keys(user).length !== 0

  console.log(user, isLoggedIn)

  return (
    <>
      {isLoggedIn ? props.children : <Redirect to='/' />}
    </>
  )
}
