import React from 'react'
import Image from '../Image/Image'
import starts from '../../../assets/images/profile/start.svg'
import './Calls.scss'

export default function Calls ({ calls }) {
  return (
    <div>
      <div className='clock-image'>
        <Image src={starts} />
      </div>
      {calls}
    </div>
  )
}
