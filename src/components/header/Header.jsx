import React, { useState } from "react";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import { AppBar, Toolbar } from "@mui/material";

import { appBarStyle, toolbarStyle } from "./HeaderStyles.js";
import { AuthState } from "../../context/AuthProvider";
import Login from "../../auth/login/Login.jsx";
import Register from "../../auth/register/Register.jsx";
import HeaderLinks from "./headerLinks/HeaderLinks.jsx";
import HeaderMenu from "./headerMenu/HeaderMenu.jsx";
import HeaderMobileDrower from "./headerMobileDrower/HeaderMobileDrower.jsx";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const {
    open,
    setOpen,
    isRegistered,
    setIsRegistered,
    openStepperVarification,
    isAuth,
  } = AuthState();

  const [activeLink, setActiveLink] = useState("1");
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => {
    setOpenMenu(open);
  };

  const handleOpen = () => {
    if (isAuth) {
      navigate("/profile");
    } else {
      setOpen(true);
    }
  };

  const handleLinkClick = (pageId) => {
    setActiveLink(pageId);
  };

  return (
    <AppBar sx={appBarStyle} position="static">
      <MaxWidthWrapper>
        <Toolbar disableGutters sx={toolbarStyle}>
          <HeaderLinks
            activeLink={activeLink}
            handleLinkClick={handleLinkClick}
          />
          <HeaderMenu
            isAuth={isAuth}
            openMenu={openMenu}
            handleOpen={handleOpen}
            toggleDrawer={toggleDrawer}
          />
          <HeaderMobileDrower
            openMenu={openMenu}
            isAuth={isAuth}
            toggleDrawer={toggleDrawer}
            activeLink={activeLink}
            setOpen={setOpen}
            setOpenMenu={setOpenMenu}
            handleLinkClick={handleLinkClick}
            setIsRegistered={setIsRegistered}
          />
        </Toolbar>
      </MaxWidthWrapper>

      <Login open={open} />
      <Register
        isRegistered={isRegistered}
        openStepperVarification={openStepperVarification}
      />
    </AppBar>
  );
};

export default Header;
