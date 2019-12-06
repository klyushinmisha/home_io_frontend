import React from 'react'
import Toggle from '../../../../Utils/Toggle/Toggle'

export default function ScriptListItem (props) {
  return (
    <div className='row'>
      <div className='mr-5'>{props.scriptName}</div>
      <Toggle />
    </div>
  )
}
