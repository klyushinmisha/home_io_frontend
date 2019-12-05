import React, { useState, useRef } from 'react'
import './SearchInput.scss'
import axios from 'axios'
import DropdownList from '../DropdownList/DropdownList'
import SearchIcon from "../SearchIcon/SearchIcon";

export default function SearchInput () {
  const [devices, setDevices] = useState([])
  const inputRef = useRef()
  const [stopFetching, setStopFetching] = useState(false)

  function getDevices (query) {
    // axios.get('url', {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem('access_token')}`
    //   },
    //   params: {
    //     q: query,
    //     page: 1,
    //     per_page: 10
    //   }
    // }).then(responce => setDevices(responce.data))
    setDevices(devices.concat(query))
    console.log(devices)
  }

  function handleChange () {
    if (!stopFetching) {
      setStopFetching(true)
      getDevices(inputRef.current.value)
      setTimeout(() => setStopFetching(false), 500)
    }
  }

  return (
    <input
      className='search-input'
      ref={inputRef}
      onChange={handleChange}
      type='text'
      placeholder='Найти устройства'/>
  )
}
