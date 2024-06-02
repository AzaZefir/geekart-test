import React from "react";
import { Box } from "@mui/material";
import Filter from "./filter/Filter";
import Ads from "./ads/Ads";
import { sideBarStyles } from "./SideBarStyles";

const SideBar = () => {
  return (
    <Box component="section" sx={sideBarStyles}>
      <Filter />
      <Ads />
    </Box>
  );
};

export default SideBar;
