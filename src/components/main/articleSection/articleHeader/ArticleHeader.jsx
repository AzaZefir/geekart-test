import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import TitleAndDateParagraph from "../../../ui/TitleAndDateParagraph";

const ArticleHeader = () => {
  return (
    <Fragment>
      <TitleAndDateParagraph />
      <Typography
        variant="h1"
        gutterBottom
        sx={{ fontSize: "20px", mb: "20px" }}
      >
        Илья Бессонов дал интервью для телеканала Россия-1
      </Typography>
    </Fragment>
  );
};

export default ArticleHeader;
