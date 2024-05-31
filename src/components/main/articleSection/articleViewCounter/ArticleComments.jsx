import { Box, Typography } from "@mui/material";
import React from "react";
import {
  CommentIcon,
  EyeIcon,
} from "../../../../assets/articleIcons/ArticleIcons";

const ArticleViewCounter = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "start", gap: "20px", my: "16px" }}>
      <Typography
        variant="body2"
        sx={{ display: "flex", alignItems: "center", gap: "6px" }}
      >
        <EyeIcon />
        4.1 K
      </Typography>
      <Typography
        variant="body2"
        sx={{ display: "flex", alignItems: "center", gap: "6px" }}
      >
        <CommentIcon />4
      </Typography>
    </Box>
  );
};

export default ArticleViewCounter;
