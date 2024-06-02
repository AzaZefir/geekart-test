import React, { useState } from "react";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import { AppBar, Box, Link, Modal, Toolbar } from "@mui/material";
import {
  ArrDown,
  BurgerMenuIcon,
  Logo,
  RuFlag,
  User,
} from "../../assets/headerIcons/HeaderIcons";
import { pages } from "./../../data/index.jsx";
import {
  activeLinkStyle,
  appBarStyle,
  languageBoxStyle,
  linkStyle,
  logoContainerStyle,
  navLinksContainerStyle,
  rightBoxStyle,
  toolbarStyle,
  userBoxStyle,
  logoStyle,
  burgerMenuStyle,
} from "./HeaderStyles.js";
import LoginModal from "./auth/login/Login.jsx";

const Header = () => {
  const [activeLink, setActiveLink] = useState("1");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLinkClick = (pageId) => {
    setActiveLink(pageId);
  };

  return (
    <AppBar sx={appBarStyle} position="static">
      <MaxWidthWrapper>
        <Toolbar disableGutters sx={toolbarStyle}>
          <Box sx={logoContainerStyle}>
            <Link to="/" sx={logoStyle}>
              <Logo />
            </Link>
            <Box sx={navLinksContainerStyle}>
              {pages.map((page) => (
                <Link
                  to="#"
                  key={page.id}
                  sx={page.id === activeLink ? activeLinkStyle : linkStyle}
                  onClick={() => handleLinkClick(page.id)}
                >
                  {React.cloneElement(page.icon, {
                    color: page.id === activeLink ? "#06082C" : "#7B7EA5",
                  })}
                  {page.link}
                </Link>
              ))}
            </Box>
          </Box>
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
          <Box sx={burgerMenuStyle}>
            <BurgerMenuIcon />
          </Box>
        </Toolbar>
      </MaxWidthWrapper>

      {/* login modal */}
      <LoginModal handleClose={handleClose} open={open} />
    </AppBar>
  );
};

export default Header;
