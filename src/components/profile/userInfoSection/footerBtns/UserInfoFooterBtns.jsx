import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import ReusableButton from "../../../ui/ReusableButton";
import { ShareIcon } from "../../../../assets/profileIcons/ProfileIcons";

const UserInfoFooterBtns = ({ handleLogout }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: { mobile: "100%", mobileL: "max-content" },
      }}
    >
      <ReusableButton
        buttonStyles={{
          width: { mobile: "100%", laptopL: "max-content" },
          backgroundColor: "rgba(6, 8, 44, 1)",
          p: "10px 24px 10px 24px",
          color: "rgba(255, 255, 255, 1)",
          "&:hover": {
            backgroundColor: " rgba(255, 255, 255, 1)",
            color: "rgba(53, 55, 84, 1)",
          },
        }}
      >
        Редактировать
      </ReusableButton>
      <Tooltip title="Выйти" placement="top-start">
        <IconButton
          onClick={handleLogout}
          sx={{
            width: "40px",
            height: "40px",
            backgroundColor: "rgba(241, 243, 247, 1)",
            borderRadius: "10px",
          }}
        >
          <ShareIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default UserInfoFooterBtns;
