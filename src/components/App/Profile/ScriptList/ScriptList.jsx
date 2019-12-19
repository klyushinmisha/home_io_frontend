import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ScriptListItem from './ScriptListItem/ScriptListItem'
import { setScriptId, setScripts } from '../../../../actions/scriptsActions'

import plus from '../../../../assets/images/profile/plus.svg'

import Image from '../../../Utils/Image/Image'

import './scriptList.scss'
import homeIoApi from '../../../../homeIoApi'
import { useHistory } from 'react-router'

export default function ScriptList () {
  const { scripts, scriptId } = useSelector(state => state.scriptsReducer)
  const dispatch = useDispatch()

  const history = useHistory()

  useEffect(() => {
    if (scripts !== null) {
      return
    }
    homeIoApi
      .getScripts(localStorage.getItem('token'))
      .then(res => {
        dispatch(setScripts(res.data.data))
      }).catch(err => {
        console.log(err)
      })
  }, [scripts])

  if (scripts === null) {
    return null
  }

  const handlePress = () => {
    dispatch(setScriptId(null))
    history.push('/profile')
  }

  return (
    <div>
      {scripts.map(script => {
        return <ScriptListItem
          key={script.id}
          item={script}
          selected={script.id === scriptId}
        />
      })}
      <div className='row justify-content-center text-center'>
        <div
          className='col'
          onClick={handlePress}
        >
          <Image src={plus} />
        </div>
      </div>
    </div>
  )
}
