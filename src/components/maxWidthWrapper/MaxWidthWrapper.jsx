import { Container } from "@mui/material";
import React from "react";

const MaxWidthWrapper = ({ children, props }) => {
  return (
    <Container disableGutters {...props} sx={{ width: 1160, maxWidth: "100%" }}>
      {children}
    </Container>
  );
};

export default MaxWidthWrapper;
