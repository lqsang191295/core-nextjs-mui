import { createTheme } from "@mui/material/styles";

export const createAppTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#1976d2",
        light: "#42a5f5",
        dark: "#1565c0",
      },
      secondary: {
        main: "#9c27b0",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#f5f5f5",
      },
    },

    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
          },
        },
      },
    },
  });
