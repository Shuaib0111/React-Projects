import React, { useState } from 'react'
import SearchContext from './SearchContext'

const SearchState = (props) => {
  const [search, setsearch] = useState('');
  console.log(search)
  return (
    <SearchContext.Provider value={{setsearch,search}}>
        {props.children}
    </SearchContext.Provider>
  )
}

export default SearchState
