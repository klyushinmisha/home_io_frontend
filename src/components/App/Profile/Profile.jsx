import React from 'react'
import CodeEditor from './CodeEditor/CodeEditor'
import Navbar from './Navbar/Navbar'

export default function Profile () {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6'></div>
          <div className='col-6'>
            <CodeEditor className='mt-5' />
          </div>
        </div>
      </div>
    </>
  )
}
