import React from "react";
import { Box } from "@mui/material";
import { mainRightSideBarStyles } from "../MainStyles";
import Filter from "./filter/Filter";
import Ads from "./ads/Ads";

const SideBar = () => {
  return (
    <Box component="section" sx={mainRightSideBarStyles}>
      <Filter />
      <Ads />
    </Box>
  );
};

export default SideBar;
