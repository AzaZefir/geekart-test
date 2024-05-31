import React, { useState } from "react";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";
import { AppBar, Box, Link, Toolbar } from "@mui/material";
import {
  ArrDown,
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
  logoStyle
} from "./HeaderStyles.js";

const Header = () => {
  const [activeLink, setActiveLink] = useState("1");
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
            <Box sx={userBoxStyle}>
              <User />
            </Box>
          </Box>
        </Toolbar>
      </MaxWidthWrapper>
    </AppBar>
  );
};

export default Header;
