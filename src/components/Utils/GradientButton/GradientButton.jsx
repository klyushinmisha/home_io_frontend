import React from 'react'

import './GradientButton.scss'

export default function GradientButton (props) {
  const style = {
    background: `linear-gradient(45deg, ${props.col1}, ${props.col2})`
  }

  return (
    <button
      className='btn gradient'
      style={style}
      {...props}
    >
      {props.children}
    </button>
  )
}
