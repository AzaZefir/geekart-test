import React from "react";
import { Box, Typography } from "@mui/material";
import TitleAndDateParagraph from "../../ui/TitleAndDateParagraph";

const MobileArticleSection = () => {
  return (
    <Box
      component="section"
      sx={{
        padding: " 19px",
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: "20px",
        display: { mobile: "block", tablet: "none" },
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        component="figure"
        sx={{
          margin: 0,
          padding: 0,
          bgcolor: "#fff",
          borderRadius: "20px",
          mb: "10px",
        }}
      >
        <img
          src="/imageMobArticle.png"
          alt="ads"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      </Box>

      <Typography
        variant="h1"
        gutterBottom
        sx={{ fontSize: "20px", mb: "11px" }}
      >
        Илья Бессонов дал интервью для телеканала Россия-1
      </Typography>

      <TitleAndDateParagraph />
    </Box>
  );
};

export default MobileArticleSection;
