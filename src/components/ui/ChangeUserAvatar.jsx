import { Box, Divider, IconButton, Popover, Typography } from "@mui/material";
import React from "react";
import {
  FormModalCameraIcon,
  FormUserIcon,
} from "../../assets/modal/FormUserIcon";
import { AddPhotoIcon } from "../../assets/profileIcons/ProfileIcons";
import { DeleteIcon } from "./../../assets/profileIcons/ProfileIcons";

const ChangeUserAvatar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
          onClick={handleClick}
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
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          sx={{
            top: "15px ",
            left: "-68px",
          }}
        >
          <Box>
            <Box
              sx={{
                p: "10px 12px ",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <AddPhotoIcon />{" "}
              <Typography
                sx={{ color: "rgba(6, 8, 44, 1)", fontWeight: "500" }}
              >
                Загрузить
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                p: "10px 12px ",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <DeleteIcon />{" "}
              <Typography
                sx={{ color: "rgba(6, 8, 44, 1)", fontWeight: "500" }}
              >
                Удалить
              </Typography>
            </Box>
          </Box>
        </Popover>
      </Box>
    </Box>
  );
};

export default ChangeUserAvatar;
