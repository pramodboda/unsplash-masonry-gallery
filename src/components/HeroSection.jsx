import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import Stack from "@mui/material/Stack";
function HeroSection() {
  return (
    <>
      <Stack>
        <SearchForm />
        <section className="hero-section"></section>
      </Stack>
    </>
  );
}

export default HeroSection;
