import React, { useState } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import GradientButton from '../../../Utils/GradientButton/GradientButton'

import homeIoApi from '../../../../homeIoApi'

import './CodeEditor.scss'

import '../../../../../node_modules/codemirror/lib/codemirror.css'
import '../../../../../node_modules/codemirror/theme/material.css'
import '../../../../../node_modules/codemirror/theme/neat.css'
import '../../../../../node_modules/codemirror/mode/python/python.js'
import '../../../../../node_modules/codemirror/mode/javascript/javascript.js'
import { useDispatch } from 'react-redux'
import { setScripts } from '../../../../actions/scriptsActions'

const CodeEditor = () => {
  const [code, setCode] = useState('# Write your code here')
  const [name, setName] = useState(null)
  const [tag, setTag] = useState(null)
  const dispatch = useDispatch()

  const sendCode = async () => {
    const token = localStorage.getItem('token')
    const { id } = (await homeIoApi.sendCode(name, tag, code, token)).data
    await homeIoApi.build(id, token)
    const res = await homeIoApi.getScripts(localStorage.getItem('token'))
    dispatch(setScripts(res.data.data))
  }

  return (
    <>
      <div className='row mt-4'>
        <div className='col'>
          <input
            className='input-field'
            type='text'
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => { e.target.placeholder = '' }}
            onBlur={(e) => { e.target.placeholder = 'Название' }}
            placeholder='Название'
          />
        </div>
        <div className='col'>
          <input
            className='input-field'
            type='text'
            onChange={(e) => setTag(e.target.value)}
            onFocus={(e) => { e.target.placeholder = '' }}
            onBlur={(e) => { e.target.placeholder = 'Тэг' }}
            placeholder='Тэг'
          />
        </div>
      </div>
      <div className='code-editor-container'>
        <CodeMirror
          className='code-mirror-editor'
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
        <div className='col-6 text-center mt-5'>
          <GradientButton
            col1='#F46EA8'
            col2='#FBB0AB'
            onClick={sendCode}
          >
            Запуск
          </GradientButton>
        </div>
      </div>
    </>
  )
}

export default CodeEditor
