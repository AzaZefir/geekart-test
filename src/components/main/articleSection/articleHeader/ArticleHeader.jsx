import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";

const ArticleHeader = () => {
  return (
    <Fragment>
      <Typography
        component="p"
        sx={{
          fontSize: "12px",
          lineHeight: "18px",
          mb: "12px",
          display: "flex",
          alignItems: "center",
        }}
      >
        Спортивная Борьба{" "}
        <Box
          component="span"
          sx={{
            width: "3px",
            height: "3px",
            bgcolor: "#9395B8",
            borderRadius: "50%",
            mx: "6px",
          }}
        />{" "}
        12 марта, 2024 в 16:03
      </Typography>
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
