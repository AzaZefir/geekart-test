import { Box, Link } from "@mui/material";
import React from "react";
import { Logo } from "../../../assets/headerIcons/HeaderIcons";
import { pages } from "../../../data";
import {
  activeLinkStyle,
  linkStyle,
  logoContainerStyle,
  logoStyle,
  navLinksContainerStyle,
} from "../HeaderStyles";

const HeaderLinks = ({ activeLink, handleLinkClick }) => {
  return (
    <Box sx={logoContainerStyle}>
      <Link to="/" sx={logoStyle}>
        <Logo />
      </Link>
      <Box sx={navLinksContainerStyle}>
        {pages.map((page) => (
          <Link
            to="#"
            key={page.id}
            variant="pBold"
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
  );
};

export default HeaderLinks;
