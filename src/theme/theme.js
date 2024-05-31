import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "26px",
      letterSpacing: "-0.78px",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "-0.5px",
      fontWeight: "500",
      color: "#7B7EA5",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "-0.5px",
      fontWeight: "500",
      mb: "20px",
    },
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

export default theme;
