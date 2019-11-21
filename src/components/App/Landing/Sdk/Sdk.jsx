import React from 'react'

import './Sdk.scss'
import Fader from '../../../Utils/Fader/Fader.jsx'
import GradientButton from '../../../Utils/GradientButton/GradientButton.jsx'
import brackets from '../../../../assets/images/landing/curly-brackets.svg'
import Image from '../../../Utils/Image/Image'

const Sdk = React.forwardRef((props, ref) => {
  return (
    <Fader.In>
      <div className='container sdk-filler' ref={ref} />
      <div className='sdk'>
        <div className='container brand'>Воспользоваться нашим FaaS SDK</div>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='brackets'>
                <Image src={brackets} />
              </div>
              <div className='code'>
                from home_io_sdk import Device<br />
                <br />
                sensor = Device.by_name('humidity_sensor')<br />
                blinker = Device.by_name('blinker')<br />
                <br />
                log = sensor.latest_log:<br />
                if log.telemetry > 0.5:<br />
                &emsp;&emsp;blinker.enabled = True<br />
              </div>
            </div>
            <div className='col'>
              <div className='sdk-description'>
                Используйте наш FaaS SDK, чтобы объединить ваши IoT устройства в единую экосистему
              </div>
              <div className='text-center button-container'>
                <GradientButton
                  col1='#C58AF3'
                  col2='#717AE9 '
                >SDK
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fader.In>
  )
})

export default Sdk
