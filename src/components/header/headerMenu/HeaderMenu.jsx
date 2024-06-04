import React, { Fragment } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import {
  ArrDown,
  BurgerMenuIcon,
  CloseIcon,
  NotificationsIcon,
  RuFlag,
  User,
} from "../../../assets/headerIcons/HeaderIcons";
import {
  burgerMenuStyle,
  languageBoxStyle,
  rightBoxStyle,
  userBoxStyle,
} from "../HeaderStyles";

const HeaderMenu = ({ handleOpen, toggleDrawer, openMenu, isAuth }) => {
  return (
    <Fragment>
      <Box sx={rightBoxStyle}>
        <Box sx={languageBoxStyle}>
          <RuFlag />
          RU
          <ArrDown />
        </Box>
        {isAuth ? (
          <IconButton sx={{ position: "relative" }}>
            <NotificationsIcon />
            <Typography
              component="span"
              sx={{
                width: "5px",
                height: "5px",
                position: "absolute",
                top: "9px",
                right: "5px",
                backgroundColor: "rgba(210, 16, 16, 1)",
                borderRadius: "50%",
              }}
            />
          </IconButton>
        ) : (
          ""
        )}
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Box
            sx={{
              ...userBoxStyle,
              borderRadius: isAuth ? "50%" : "10px",
            }}
            onClick={handleOpen}
          >
            {!isAuth ? (
              <User />
            ) : (
              <img
                src="/sportsman1.png"
                alt="user avatar"
                style={{ width: "100%", objectFit: "cover" }}
              />
            )}
          </Box>
          {isAuth ? <ArrDown /> : ""}
        </Box>
      </Box>
      <Box sx={burgerMenuStyle} onClick={toggleDrawer(true)}>
        {!openMenu ? (
          <BurgerMenuIcon />
        ) : (
          <IconButton
            sx={{ justifyContent: "flex-end" }}
            onClick={toggleDrawer(false)}
          >
            <CloseIcon />
          </IconButton>
        )}
      </Box>
    </Fragment>
  );
};

export default HeaderMenu;
