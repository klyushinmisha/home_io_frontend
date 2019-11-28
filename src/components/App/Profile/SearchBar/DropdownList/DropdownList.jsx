import React from 'react'
import './DropdownList.scss'

export default function DropdownList (props) {
  return (
    <div className='dropdown-content'>
      <p>{props.devices.map(device => <li>{device}</li>)}</p>
    </div>
  )
}
