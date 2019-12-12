import React from 'react'
import { useSelector } from 'react-redux'

export default function SignUpForm () {
  const isFetching = useSelector(
    state => state.authReducer.isFetching
  )

  return (
    null
  )
}
