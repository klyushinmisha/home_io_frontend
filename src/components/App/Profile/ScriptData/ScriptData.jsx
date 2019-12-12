import React from 'react'
import { Redirect, useParams } from 'react-router'
import { useSelector } from 'react-redux'

export default function ScriptData () {
  const { scriptId } = useParams()
  console.log(scriptId)
  const scripts = useSelector(
    state => state.scriptsReducer.scripts
  )
  if (scripts === null) {
    return null
  }
  let scriptData = null
  const scriptsQuery = scripts.filter(s => parseInt(s.id) === parseInt(scriptId))
  if (scriptsQuery.length === 1) {
    scriptData = scriptsQuery[0]
  }

  const view = scriptData !== null ? (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6'>
            Название
          </div>
          <div className='col-6'>
            {scriptData.name}
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            Тэг
          </div>
          <div className='col-6'>
            {scriptData.tag}
          </div>
        </div>
      </div>
    </>
  ) : null

  return view
}
