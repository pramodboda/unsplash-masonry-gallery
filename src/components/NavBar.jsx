import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import  Stack  from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
// import useScrollTrigger from "@mui/material/useScrollTrigger";

import DarkLightModeBtn from "./DarkLightModeBtn";

import Logo from "./Logo";

export default function NavBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
        <AppBar>
          <Toolbar>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              width="100%"
            >
              {" "}
              <Logo />
              <DarkLightModeBtn />
            </Stack>
          </Toolbar>
        </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
