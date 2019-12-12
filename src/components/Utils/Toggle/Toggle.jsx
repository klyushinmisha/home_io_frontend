import React, { useState } from 'react'
import './Toggle.scss'

export default function Toggle () {
  const [isChecked, setIsChecked] = useState(false)

  const classes = ['toggle']
  if (isChecked) {
    classes.push('checked')
  }
  return (
    <div className='row'>
      <label
        onClick={() => setIsChecked(!isChecked)}
        className={classes.join(' ')}
      >
        <span />
      </label>
    </div>
  )
}
