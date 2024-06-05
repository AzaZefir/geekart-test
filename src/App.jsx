import React from "react";
import { Box } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";
import "./App.css";

const router = createBrowserRouter(routes);

function App() {
  return (
    <Box component="section">
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
