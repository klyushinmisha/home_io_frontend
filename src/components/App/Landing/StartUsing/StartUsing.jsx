import React from 'react'

import './StartUsing.scss'
import Fader from '../../../Utils/Fader/Fader.jsx'
import GradientButton from '../../../Utils/GradientButton/GradientButton.jsx'
import play from '../../../../assets/images/landing/play.png'
import Image from '../../../Utils/Image/Image'
import { useHistory } from 'react-router'

const StartUsing = React.forwardRef((props, ref) => {
  const history = useHistory()

  return (
    <Fader.In>
      <div className='start-using-filler' ref={ref} />
      <div className='container-fluid start-using'>
        <div className='row'>
          <div className='col'>
            <div className='row-12 brand text-center'>Начать пользоваться</div>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-6 text-center'>
            <Image src={play} className='pr-5' maxHeight='65vh' />
          </div>
          <div className='col-5 mt-5'>
            <div className='row-12 brand-description mt-5'>
              Если вы хотите сделать умный дом именно таким,
              каким его видете вы, присоединяйтесь к Home.io
              уже сегодня
            </div>
            <div className='row-12 text-center gradient-button-container'>
              <GradientButton
                col1='#98F7CC'
                col2='#B2FB8D'
                onClick={() => history.push('/signUp')}
              >Начать пользоваться
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </Fader.In>
  )
})

export default StartUsing
