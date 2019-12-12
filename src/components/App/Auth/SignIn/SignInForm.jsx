import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import userInit from '../../../../actions/userActions'
import GradientButton from '../../../Utils/GradientButton/GradientButton'
import HomeIoApi from '../../../../homeIoApi'

import '../Form.scss'

export default function SignInForm () {
  const [isFetching, setIsFetching] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  const login = async (e) => {
    e.preventDefault()
    setIsFetching(true)
    try {
      const resp = await HomeIoApi.login(username, password)
      const { access_token: token } = resp.data
      // eslint-disable-next-line
      localStorage.setItem('token', token)
      dispatch(userInit(token, username))
      setIsFetching(false)
      history.push('/profile')
    } catch (e) {
      setUsername('')
      setPassword('')
      setIsFetching(false)
    }
  }

  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <form className='form-group'>
          <div className='row mt-5'>
            <input
              className='input-field'
              type='text'
              onChange={(e) => setUsername(e.target.value)}
              onFocus={(e) => { e.target.placeholder = '' }}
              onBlur={(e) => { e.target.placeholder = 'Username' }}
              placeholder='Username'
            />
          </div>
          <div className='row mt-5'>
            <input
              className='input-field mt-5'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              onFocus={(e) => { e.target.placeholder = '' }}
              onBlur={(e) => { e.target.placeholder = 'Пароль' }}
              placeholder='Пароль'
            />
          </div>
          <div className='row mt-5 justify-content-center'>
            <GradientButton
              disabled={isFetching}
              col1='#F46EA8'
              col2='#FBB0AB'
              onClick={login}
            >
              Войти
            </GradientButton>
          </div>
        </form>
      </div>
    </div>
  )
}
