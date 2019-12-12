import React, { useRef } from 'react'
import { useHistory } from 'react-router'

import Navbar from '../../Utils/Navbar/Navbar.jsx'
import Greeting from './Greeting/Greeting.jsx'
import ThreeSteps from './ThreeSteps/ThreeSteps.jsx'
import Sdk from './Sdk/Sdk.jsx'
import StartUsing from './StartUsing/StartUsing.jsx'

export default function Landing () {
  const descRef = useRef(null)
  const sdkRef = useRef(null)
  const startUsingRef = useRef(null)

  const history = useHistory()

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
      <Navbar
        isLoggedIn={false}
        handleLogoClick={() => history.push('/')}
        links={Object.keys(linkRefMap)}
        scrollToItem={scrollToItem}
      />
      <Greeting scrollToItem={scrollToItem} />
      <ThreeSteps ref={descRef} />
      <Sdk ref={sdkRef} />
      <StartUsing ref={startUsingRef} />
    </div>
  )
}
