import React from "react";
import { Box } from "@mui/material";
import { mainWrapperStyles } from "./MainStyles";
import ArticleSection from "./articleSection/ArticleSection";
import SideBar from "./sideBar/SideBar";

const Main = () => {
  return (
    <Box sx={mainWrapperStyles}>
      <ArticleSection />
      <SideBar />
    </Box>
  );
};

export default Main;
