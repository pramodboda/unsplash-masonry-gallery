import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function HeroSection() {
  return (
    <>
      <Stack>
        <SearchForm />
        <Typography
            variant="h4"
            component="h4"
            sx={{ color: "#e2d9cb", textAlign: "center", position:"absolute", zIndex:999, width: "100%", top:"140px", p:1 }}
          >
            Image Gallery<br/>Masonry Layout
          </Typography>
        <section className="hero-section">

        </section>
      </Stack>
    </>
  );
}

export default HeroSection;
