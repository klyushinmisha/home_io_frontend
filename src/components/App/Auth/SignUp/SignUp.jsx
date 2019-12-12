import React from 'react'
import { useHistory } from 'react-router'

import Image from '../../../Utils/Image/Image'
import SignUpForm from './SignUpForm'
import signUpImg from '../../../../assets/images/auth/people.svg'
import Navbar from '../../../Utils/Navbar/Navbar'
import Fader from '../../../Utils/Fader/Fader'

export default function SignUn () {
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
              <div className='col text-center'>
                <Image src={signUpImg} />
              </div>
              <div className='col'>
                <SignUpForm />
              </div>
            </div>
          </div>
        </Fader.In>
      </div>
    </>
  )
}
