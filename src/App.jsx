import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Paper from "@mui/material/Paper";

import { ThemeContextProvider } from "./context/ThemeContext/ThemeContextProvider";
import GalleryContextProvider from "./context/GalleryContext/GalleryContextProvider";



import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <GalleryContextProvider>
          <Paper>
            <HomePage />
           
          </Paper>

       
        </GalleryContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
