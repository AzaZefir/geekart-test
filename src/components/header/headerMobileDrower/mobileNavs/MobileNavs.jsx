import { IconButton, ListItem } from "@mui/material";
import React from "react";
import { activeMobileLinkStyle, mobileLinkStyle } from "../../HeaderStyles";

const MobileNavs = ({ item, handleLinkClick, activeLink }) => {
  return (
    <ListItem
      component="a"
      href={item.href}
      sx={item.id === activeLink ? activeMobileLinkStyle : mobileLinkStyle}
      onClick={() => handleLinkClick(item.id)}
    >
      <IconButton>
        {React.cloneElement(item.icon, {
          color: item.id === activeLink ? "#06082C" : "#7B7EA5",
        })}
      </IconButton>
      {item.link}
    </ListItem>
  );
};

export default MobileNavs;
