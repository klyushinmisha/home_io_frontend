import React, { useState, useEffect } from 'react'

import './Fader.scss'

export function In (props) {
  const [cls, setCls] = useState('fadein-init')

  useEffect(() => {
    setCls('fadein')
  }, [setCls])

  return <div className={cls}>{props.children}</div>
}

export function Out (props) {
  const [cls, setCls] = useState('fadeout-init')

  useEffect(() => {
    setCls('fadeout')
  }, [setCls])

  return <div className={cls}>{props.children}</div>
}

export default { In, Out }
