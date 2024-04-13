import React, {useContext, useState} from 'react'

import GalleryContext from "./GalleryContext";



function GalleryContextProvider({children}) {
    const [searchTerm, setSearchTerm] = useState("Interiors");
  return (
    <GalleryContext.Provider value={{searchTerm, setSearchTerm}}>
        {children}
    </GalleryContext.Provider>
  )
}

export default GalleryContextProvider
