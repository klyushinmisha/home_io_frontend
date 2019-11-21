import React, { useRef } from 'react'

import Navbar from './Navbar/Navbar.jsx'
import Greeting from './Greeting/Greeting.jsx'
import ThreeSteps from './ThreeSteps/ThreeSteps.jsx'
import Sdk from './Sdk/Sdk.jsx'
import StartUsing from './StartUsing/StartUsing.jsx'

export default function Landing () {
  const descRef = useRef(null)
  const sdkRef = useRef(null)
  const startUsingRef = useRef(null)

  const linkRefMap = {
    'О нас': descRef,
    SDK: sdkRef,
    'Начать пользоваться': startUsingRef
  }

  const scrollToItem = (link) => {
    linkRefMap[link].current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <Navbar links={Object.keys(linkRefMap)} scrollToItem={scrollToItem} />
      <Greeting scrollToItem={scrollToItem} />
      <ThreeSteps ref={descRef} />
      <Sdk ref={sdkRef} />
      <StartUsing ref={startUsingRef} />
    </div>
  )
}
