import { Container } from "@mui/material";
import React from "react";

const MaxWidthWrapper = ({ children, props }) => {
  return (
    <Container
      disableGutters
      {...props}
      sx={{
        width: {
          mobile: "100%", // Mobile devices
          tablet: "100%", // Tablets
          laptop: 960, // Small laptops
          laptopL: 1160, // Laptops
          desktop: 1160, // Desktops
          desktopL: 1160, // Desktops
        },
        maxWidth: "100%",
        padding: {
          mobile: "0 16px", // Padding for mobile
          tablet: "0 24px", // Padding for tablets
          laptop: "0", // Padding for small laptops
          laptopL: "0 0", // Padding for laptops
          desktop: "0 0", // Padding for laptops
          desktopL: "0 0", // Padding for desktops
        },
      }}
    >
      {children}
    </Container>
  );
};

export default MaxWidthWrapper;
