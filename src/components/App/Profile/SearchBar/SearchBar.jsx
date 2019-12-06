import React from 'react'
import SearchIcon from './SearchIcon/SearchIcon'
import SearchInput from './SearchInput/SearchInput'
import DropdownList from './DropdownList/DropdownList'

const SearchBar = () => {
  return (
    <div className='container-fluid'>
      <SearchInput />
      <SearchIcon />
      <DropdownList devices={[]} />
    </div>
  )
}

export default SearchBar
