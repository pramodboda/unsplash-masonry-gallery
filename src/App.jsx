import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './components/Gallery'
import GalleryContextProvider from './context/GalleryContext/GalleryContextProvider'

function App() {
  

  return (
    <>
    <GalleryContextProvider>
     <h2>Galley App</h2>


     <Gallery/>
     </GalleryContextProvider>
    </>
  )
}

export default App
