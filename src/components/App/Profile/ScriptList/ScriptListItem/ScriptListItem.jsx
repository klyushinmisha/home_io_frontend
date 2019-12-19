import React from 'react'
import Toggle from '../../../../Utils/Toggle/Toggle'

import './ScriptListItem.scss'
import { useDispatch } from 'react-redux'
import { setScriptId } from '../../../../../actions/scriptsActions'
import { useHistory } from 'react-router'

export default function ScriptListItem ({ selected, item }) {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleClick = () => {
    dispatch(setScriptId(item.id))
    history.push(`/profile/scripts/${item.id}`)
  }

  let classes = []
  if (selected) {
    classes = ['selected-script-name', 'pl-2']
  }
  return (
    <div className='container-fluid mb-3'>
      <div className='row'>
        <div
          className='col-8'
          onClick={handleClick}
        >
          <div className={classes.join(' ')}>
            {item.name}
          </div>
        </div>
        <div className='col-4 justify-content-center text-center'>
          <Toggle enabled={item.enabled} scriptId={item.id} />
        </div>
      </div>
    </div>
  )
}
