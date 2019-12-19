import React, { useEffect } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'

import './CodeViewer.scss'

import { useDispatch, useSelector } from 'react-redux'
import { loadScript } from '../../../../actions/scriptsActions'
import Calls from '../../../Utils/Calls/Calls'
import { useParams } from 'react-router'

const CodeViewer = () => {
  const script = useSelector(
    state => state.scriptsReducer.script
  )
  const dispatch = useDispatch()

  const { scriptId } = useParams()

  useEffect(() => {
    if (script !== null) {
      return
    }
    dispatch(loadScript(scriptId))
  }, [script, dispatch, scriptId])

  return (
    <>
      <div className='row mt-4'>
        <div className='col'>
          {`Название: ${script !== null ? script.name : ''}`}
        </div>
        <div className='col'>
          {`Тэг: ${script !== null ? script.tag : ''}`}
        </div>
        <div className='col'>
          <Calls calls={script !== null ? script.calls : null} />
        </div>
      </div>
      <div className='code-editor-container'>
        <CodeMirror
          className='code-mirror-editor'
          value={script !== null ? script.code : ''}
          options={{
            mode: 'python',
            theme: 'material',
            lineNumbers: true
          }}
        />
      </div>
    </>
  )
}

export default CodeViewer
