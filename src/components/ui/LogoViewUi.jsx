import React from "react";
import { Box } from "@mui/material";

const LogoViewUi = () => {
  return (
    <Box
      component="figure"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: "24px",
        mt: "0",
      }}
    >
      <img src="/logoSmall.png" alt="logo" />
    </Box>
  );
};

export default LogoViewUi;
