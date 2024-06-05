<<<<<<< HEAD
import { Box } from "@mui/material";
=======
>>>>>>> 2f26c9da32e5f503430a8cd5278cb091c84bc473
import React from "react";
import { Box, Link } from "@mui/material";
import { Logo } from "../../../assets/headerIcons/HeaderIcons";
import { pages } from "../../../data";
import { Link } from 'react-router-dom';
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
      <Link href="/" sx={logoStyle}>
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
