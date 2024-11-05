import React from "react";

import Box from "@mui/material/Box";
import Gallery from "../components/Gallery";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
// import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Box sx={{ mt: 4, boxShadow: "none" }}>
        <Gallery galleryID="my-test-gallery" />
      </Box>
      {/* <Footer /> */}
    </>
  );
}

export default HomePage;
