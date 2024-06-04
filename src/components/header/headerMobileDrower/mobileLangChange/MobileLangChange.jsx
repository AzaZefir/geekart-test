import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { ArrDown, RuFlag } from "../../../../assets/headerIcons/HeaderIcons";

const MobileLangChange = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "6px",
        }}
      >
        <IconButton>
          <RuFlag />
        </IconButton>
        <Typography
          variant="h6"
          component="p"
          sx={{ color: "rgba(6, 8, 44, 1)" }}
        >
          RU{" "}
        </Typography>
      </Box>

      <IconButton>
        <ArrDown />
      </IconButton>
    </Box>
  );
};

export default MobileLangChange;
