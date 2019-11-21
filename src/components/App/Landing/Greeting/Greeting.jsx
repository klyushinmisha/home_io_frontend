import React from 'react'

import Image from '../../../Utils/Image/Image.jsx'

import home from '../../../../assets/images/landing/home.png'
import './Greeting.scss'
import Fader from '../../../Utils/Fader/Fader.jsx'
import GradientButton from '../../../Utils/GradientButton/GradientButton.jsx'

export default function Greeting (props) {
  return (
    <Fader.In>
      <div className='container greeting'>
        <div className='row text-center'>
          <div className='col-6 col-sm-6 col-md-6 col-lg-6 mt-5'>
            <div className='row brand mt-5'>Home.io</div>
            <div className='row brand-description'>FaaS IoT платформа</div>
            <div className='row mt-5 pt-5'>
              <GradientButton
                col1='#F46EA8'
                col2='#FBB0AB'
                onClick={() => props.scrollToItem('О нас')}
              >Узнать подробнее
              </GradientButton>
            </div>
          </div>
          <div className='col-6 col-sm-6 col-md-6 col-lg-6 pl-5 pr-3'>
            <Image src={home} />
          </div>
        </div>
      </div>
    </Fader.In>
  )
}
