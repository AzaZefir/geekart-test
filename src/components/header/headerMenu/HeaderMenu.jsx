import { Box, IconButton } from "@mui/material";
import React, { Fragment } from "react";
import {
  ArrDown,
  BurgerMenuIcon,
  CloseIcon,
  RuFlag,
  User,
} from "../../../assets/headerIcons/HeaderIcons";
import {
  burgerMenuStyle,
  languageBoxStyle,
  rightBoxStyle,
  userBoxStyle,
} from "../HeaderStyles";

const HeaderMenu = ({ handleOpen, toggleDrawer, openMenu }) => {
  return (
    <Fragment>
      <Box sx={rightBoxStyle}>
        <Box sx={languageBoxStyle}>
          <RuFlag />
          RU
          <ArrDown />
        </Box>
        <Box sx={userBoxStyle} onClick={handleOpen}>
          <User />
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
