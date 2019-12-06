import React from 'react'
import './Toggle.scss'

export default function Toggle () {
  return (
    <div className='row'>
      <input type='checkbox' id='cbx' />
      <label htmlFor='cbx' className='toggle'><span /></label>
    </div>
  )
}
