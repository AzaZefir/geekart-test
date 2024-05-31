import React from "react";
import { Box, Divider } from "@mui/material";
import { mainPostStyles } from "../MainStyles";
import ArticleHeader from "./articleHeader/ArticleHeader";
import ArticleText from "./articleText/ArticleText";
import ArticleImages from "./articleImages/ArticleImages";
import ArticleViewCounter from "./articleViewCounter/ArticleComments";
import ArticleComments from "./articleComments/ArticleComments";

const ArticleSection = () => {
  return (
    <Box component="section" sx={mainPostStyles}>
      <ArticleHeader />

      <ArticleText />

      <ArticleImages />

      <ArticleViewCounter />

      <Divider sx={{ width: "100%" }} />

      <ArticleComments />
    </Box>
  );
};

export default ArticleSection;
