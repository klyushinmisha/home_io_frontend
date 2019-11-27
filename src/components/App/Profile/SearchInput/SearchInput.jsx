import React, { useState, useRef } from 'react'
import './SearchInput.scss'
import axios from 'axios'

import search from '../../../../assets/images/profile/search.svg'

export default function SearchInput () {
  const [devices, setDevices] = useState([])
  const inputRef = useRef()


  function getDevices (query) {
    axios.get('url', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      },
      params: {
        q: query,
        page: 1,
        per_page: 10
      }
    }).then(responce => setDevices(responce.data))
    // setDevices(devices.concat(query))
    // console.log(devices)
  }

  return (
    <div className='search-box'>
      <input ref={inputRef} onChange={() => getDevices(inputRef.current.value)} type='text' placeholder='Search your tools' />
    </div>
  )
}
