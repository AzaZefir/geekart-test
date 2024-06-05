import React, { Fragment } from "react";
import { Typography, useTheme } from "@mui/material";

const MobileScrollLines = ({ bottom }) => {
  const theme = useTheme();

  return (
    <Fragment>
      <Typography
        sx={{
          width: "56px",
          height: "5px",
          backgroundColor: "#fff",
          position: "absolute",
          top: "-8px",
          borderRadius: "7px",
          left: "50%",
          transform: "translate(-50%, -50%)",
          [theme.breakpoints.up("tablet")]: {
            display: "none",
          },
        }}
      />
      <Typography
        sx={{
          width: "135px",
          height: "5px",
          backgroundColor: "rgba(0, 0, 0, 1)",
          position: "absolute",
          bottom: { bottom },
          borderRadius: "7px",
          left: "50%",
          transform: "translate(-50%, -50%)",
          [theme.breakpoints.up("tablet")]: {
            display: "none",
          },
        }}
      />
    </Fragment>
  );
};

export default MobileScrollLines;
