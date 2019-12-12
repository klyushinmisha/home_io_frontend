import React from 'react'
import { useHistory } from 'react-router'

import Image from '../../../Utils/Image/Image'
import SignInForm from './SignInForm'
import signInImg from '../../../../assets/images/auth/flower.svg'
import Navbar from '../../../Utils/Navbar/Navbar'
import Fader from '../../../Utils/Fader/Fader'

export default function SignIn () {
  const history = useHistory()

  return (
    <>
      <Navbar
        isLoggedIn={false}
        handleLogoClick={() => history.push('/')}
      />
      <div className='mt-5'>
        <Fader.In>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 col-md-6 text-center mt-5'>
                <Image src={signInImg} />
              </div>
              <div className='col-12 col-md-6 form-group'>
                <div className='row justify-content-center'>
                  <div className='greeting-text'>Добро пожаловать!</div>
                </div>
                <SignInForm />
              </div>
            </div>
          </div>
        </Fader.In>
      </div>
    </>
  )
}
