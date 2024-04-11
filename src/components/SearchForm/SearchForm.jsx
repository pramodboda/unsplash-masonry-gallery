import React from 'react'
import { useGlobalContext } from '../../context/GalleryContext/GalleryContext'

function SearchForm() {
    const {setSearchTerm} = useGlobalContext()

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        const searchValue = e.target.elements.search.value;
        if(!searchValue) return;
        setSearchTerm(searchValue)
    }
  return (
    <div>     <input type="text" name="search" placeholder='coding'/>
    <button> Search</button></div>
  )
}

export default SearchForm