"use client";
import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#022959", // Custom primary color
    },
    // secondary: {
    //   main: "#03DAC6", // Custom secondary color
    // },
    // error: {
    //   main: "#B00020", // Custom error color
    // },
    // mode: "light", // Set default mode to light
  },

  typography: {
    fontFamily: "Ubuntu, sans-serif", // Custom font family
    //   h1: {
    //     fontSize: "3rem",
    //     fontWeight: 700,
    //   },
    //   body1: {
    //     fontSize: "1rem",
    //     lineHeight: 1.5,
    //   },
  },

  // shape: {
  //   borderRadius: 8, // Custom border radius for components
  // },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontSize: "16px",
          lineHeight: "1.5",
          padding: "12px 25px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#164A8A",
          },
        },
      },
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
    },

    // MuiTypography: {
    //   styleOverrides: {
    //     root: {
    //       color: "#333", // Custom default text color
    //     },
    //   },
    // },
  },
});

export default customTheme;
