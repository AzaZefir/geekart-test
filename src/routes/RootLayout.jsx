import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { Box } from "@mui/material";

export const RootLayout = () => {
  return (
    <Box className="App">
      <Header />
      <Outlet />
    </Box>
  );
};
