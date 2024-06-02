import React from "react";
import { Box, Divider } from "@mui/material";
import ArticleHeader from "./articleHeader/ArticleHeader";
import ArticleText from "./articleText/ArticleText";
import ArticleImages from "./articleImages/ArticleImages";
import ArticleViewCounter from "./articleViewCounter/ArticleComments";
import ArticleComments from "./articleComments/ArticleComments";
import { articleStyles } from "./ArticleStyles";

const ArticleSection = () => {
  return (
    <Box component="section" sx={articleStyles}>
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
