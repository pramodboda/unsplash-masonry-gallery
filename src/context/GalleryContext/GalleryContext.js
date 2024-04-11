import React, { createContext, useContext } from 'react'

const GalleryContext = createContext();

export const useGlobalContext = () => useContext(GalleryContext);
export default GalleryContext