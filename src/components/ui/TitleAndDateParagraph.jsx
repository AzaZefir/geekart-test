import React from "react";
import { Box, Typography } from "@mui/material";

const TitleAndDateParagraph = () => {
  return (
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
  );
};

export default TitleAndDateParagraph;
