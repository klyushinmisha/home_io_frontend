import React from 'react'
import Toggle from '../../../../Utils/Toggle/Toggle'

export default function ScriptListItem ({ item }) {
  return (
    <div className='container-fluid mb-3'>
      <div className='row'>
        <div className='col-8'>
          {item.name}
        </div>
        <div className='col-4'>
          <Toggle />
        </div>
      </div>
    </div>
  )
}
