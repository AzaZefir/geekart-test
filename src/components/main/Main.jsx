import React from "react";
import { Box, Container } from "@mui/material";
import { mainWrapperStyles } from "./MainStyles";
import ArticleSection from "./articleSection/ArticleSection";
import SideBar from "./sideBar/SideBar";
import NewsFeed from "./newsFeed/NewsFeed";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import MobileArticleSection from "./mobileArticleSection/MobileArticleSection";

const Main = () => {
  return (
    <Box sx={{width:'100%'}}>
      <Container disableGutters sx={{ width: "100%" }}>
        <NewsFeed />
      </Container>

      <MaxWidthWrapper>
        <Box sx={mainWrapperStyles}>
          {/* Desktop artice view */}
          <ArticleSection />
          <SideBar />

          {/* Mobile article view */}
          <MobileArticleSection />
        </Box>
      </MaxWidthWrapper>
    </Box>
  );
};

export default Main;
