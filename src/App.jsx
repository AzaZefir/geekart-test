import { Box } from "@mui/material";
import Header from "./components/header/Header";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Box component="section">
      <Header />
      <HomePage />
    </Box>
  );
}

export default App;
