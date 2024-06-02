import React from "react";
import { Box } from "@mui/material";

const Ads = () => {
  return (
    <Box
      component="figure"
      sx={{ margin: 0, padding: 0, bgcolor: "#fff", borderRadius: "20px" }}
    >
      <img
        src="/ads.png"
        alt="ads"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />
    </Box>
  );
};

export default Ads;
