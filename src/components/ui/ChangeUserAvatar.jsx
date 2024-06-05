import { Box, IconButton } from "@mui/material";
import React from "react";
import {
  FormModalCameraIcon,
  FormUserIcon,
} from "../../assets/modal/FormUserIcon";

const ChangeUserAvatar = () => {
  return (
    <Box sx={{ m: "16px 24px 32px 24px" }}>
      <Box
        component="figure"
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100px",
          height: "100px",
          borderRadius: "250px",
          backgroundColor: "#CCCFDA",
          m: "0",
        }}
      >
        <FormUserIcon />
        <IconButton
          sx={{
            position: "absolute",
            left: "68px",
            top: "68px",
            width: "32px",
            height: "32px",
            backgroundColor: "#F1F3F7",
          }}
        >
          <FormModalCameraIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChangeUserAvatar;
