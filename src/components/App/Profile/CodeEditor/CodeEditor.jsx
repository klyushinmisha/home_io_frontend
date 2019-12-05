import React, { useState } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import GradientButton from '../../../Utils/GradientButton/GradientButton'

import HomeIoApi from '../../../../homeIoApi'

import './CodeEditor.scss'

import '../../../../../node_modules/codemirror/lib/codemirror.css'
import '../../../../../node_modules/codemirror/theme/material.css'
import '../../../../../node_modules/codemirror/theme/neat.css'
import '../../../../../node_modules/codemirror/mode/python/python.js'
import '../../../../../node_modules/codemirror/mode/javascript/javascript.js'

const CodeEditor = () => {
  const [code, setCode] = useState('# Write your code here')

  const sendCode = async () => {
    const token = localStorage.getItem('token')
    const { id } = (await HomeIoApi.sendCode('testname', 'testtag', code, token)).data
    await HomeIoApi.build(id, token)
  }

  return (
    <div>
      <CodeMirror
        className='code-editor'
        value={code}
        options={{
          mode: 'python',
          theme: 'material',
          lineNumbers: true
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value)
        }}
      />
      <div className='col-6 text-center'>
        <GradientButton
          className='mt-5'
          col1='#F46EA8'
          col2='#FBB0AB'
          onClick={sendCode}
        >
          Запуск
        </GradientButton>
      </div>
    </div>
  )
}

export default CodeEditor
