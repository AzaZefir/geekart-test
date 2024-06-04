import { Box } from "@mui/material";
import React from "react";
import { CloseIcon } from "../../assets/headerIcons/HeaderIcons";

const CloseBtnUi = ({ onClick }) => {
  return (
    <Box
      component="figure"
      sx={{
        cursor: "pointer",
        margin: "0",
        position: "absolute",
        right: "16px",
        top: "16px",
      }}
      onClick={onClick}
    >
      <CloseIcon />
    </Box>
  );
};

export default CloseBtnUi;
