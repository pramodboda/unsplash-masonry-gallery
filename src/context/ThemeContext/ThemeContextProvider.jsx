import React, { createContext, useContext, useState, useMemo } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { deepPurple, grey, brown } from "@mui/material/colors";

export const ThemeContext = createContext({
  mode: "light",
  toggleColorMode: () => {},
});

export const shades = {
  primary: {
    50: "#e2d9cb",
  },

  secondary: {
    100: "#f7ccd2",
    200: "#ef99a4",
    300: "#e66677",
    400: "#de3349",
    500: "#d6001c",
    600: "#ab0016",
    700: "#800011",
    800: "#56000b",
    900: "#2b0006",
  },
  neutral: {
    100: "#f5f5f5",
    200: "#ecebeb",
    300: "#e2e1e1",
    400: "#d9d7d7",
    500: "#cfcdcd",
    600: "#a6a4a4",
  },
};

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        // console.log(mode)
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        },
        components: {
          // Name of the component
          MuiButtonBase: {
            defaultProps: {
              // The props to change the default for.
              disableRipple: true, // No more ripple, on the whole application 💣!
            },
          },
        },
        shape: {
          borderRadius: 0,
        },
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: shades.primary[50],
                },
                secondary: {
                  main: shades.secondary[500],
                },
                // neutral: {
                //   dark: shades.neutral[700],
                //   main: shades.neutral[500],
                //   light: shades.neutral[100],
                // },
                background: {
                  default: shades.primary[50],
                  paper: shades.primary[50],
                },
                // divider: deepPurple[200],
                text: {
                  primary: brown[900],
                  secondary: brown[800],
                },
              }
            : {
                // palette values for dark mode
                common: {
                  black: "#f9f9f9",
                  white: shades.primary[50],
                },
                primary: {
                  main: deepPurple[300],
                },
                // divider: deepPurple[700],
                background: {
                  default: "#1e1e1e",
                  // paper: "#1e1e1e"
                },
                text: {
                  primary: shades.primary[50],
                  secondary: grey[500],
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
