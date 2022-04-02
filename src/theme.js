import React from "react";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff"
    },
    secondary: {
      main: "#8bc34a"
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    body1: {
      color: "#1B263B",
      fontSize: "1em"
    },
    body2: {
      color: "#778DA9",
      fontSize: "0.9em"
    }
  },

  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          whiteSpace: "normal"
        }
      }
    }
  }
});

export default theme;
