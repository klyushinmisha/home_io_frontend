import React from 'react'
import './Toggle.scss'
import { useDispatch, useSelector } from 'react-redux'
import { switchEnabled } from '../../../actions/scriptsActions'

export default function Toggle ({ scriptId, enabled }) {
  const token = useSelector(
    state => state.userReducer.token
  )
  const dispatch = useDispatch()

  const classes = ['toggle']
  if (enabled) {
    classes.push('checked')
  }
  return (
    <div className='row justify-content-center text-center'>
      <label
        onClick={() => dispatch(switchEnabled(scriptId, token))}
        className={classes.join(' ')}
      >
        <span />
      </label>
    </div>
  )
}
