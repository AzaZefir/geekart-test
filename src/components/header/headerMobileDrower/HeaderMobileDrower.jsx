import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { pages } from "../../../data";
import { activeMobileLinkStyle, mobileLinkStyle } from "../HeaderStyles";
import { ArrDown, RuFlag } from "../../../assets/headerIcons/HeaderIcons";
import ReusableButton from "../../ui/ReusableButton";

const HeaderMobileDrower = ({
  openMenu,
  toggleDrawer,
  activeLink,
  setOpen,
  setOpenMenu,
  handleLinkClick,
  setIsRegistered,
}) => {
  return (
    <Drawer
      anchor="right"
      open={openMenu}
      onClose={toggleDrawer(false)}
      sx={{
        "& .MuiDrawer-paper": {
          boxShadow: "none",
          top: "64px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          width: "100%",
        },
        "& .MuiBackdrop-root": {
          backgroundColor: "inherit",
        },
        "& .css-1y6yf4s": {
          width: "100%",
        },
      }}
    >
      <Box
        sx={{
          width: 250,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          // mx:'16px'
        }}
      >
        <Box sx={{ mt: "24px" }}>
          <List sx={{ margin: "0 16px" }}>
            {pages.map((item) => (
              <ListItem
                button
                key={item.id}
                component="a"
                href={item.href}
                sx={
                  item.id === activeLink
                    ? activeMobileLinkStyle
                    : mobileLinkStyle
                }
                onClick={() => handleLinkClick(item.id)}
              >
                <IconButton>
                  {React.cloneElement(item.icon, {
                    color: item.id === activeLink ? "#06082C" : "#7B7EA5",
                  })}
                </IconButton>
                {item.link}
              </ListItem>
            ))}
            <Box
              sx={{
                width: "100%",
                height: "52px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "6px",
                }}
              >
                <IconButton>
                  <RuFlag />
                </IconButton>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{ color: "rgba(6, 8, 44, 1)" }}
                >
                  RU{" "}
                </Typography>
              </Box>

              <IconButton>
                <ArrDown />
              </IconButton>
            </Box>
          </List>
        </Box>

        <Box
          sx={{
            mx: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            marginBottom: "130px",
          }}
        >
          <ReusableButton
            variant="text"
            onClick={() => {
              setIsRegistered(true);
              setOpenMenu(false);
            }}
            buttonStyles={{
              backgroundColor: "rgba(6, 8, 44, 1)",
              color: "rgba(255, 255, 255, 1)",
              "&:hover": {
                backgroundColor: "rgba(241, 243, 247, 1)",
                color: "rgba(6, 8, 44, 1)",
              },
            }}
          >
            Зарегистрироваться
          </ReusableButton>
          <ReusableButton
            onClick={() => {
              setOpen(true);
              setOpenMenu(false);
            }}
            variant="text"
            buttonStyles={{
              backgroundColor: "rgba(241, 243, 247, 1)",
              color: "rgba(6, 8, 44, 1)",
              "&:hover": {
                backgroundColor: "rgba(6, 8, 44, 1)",
                color: "rgba(255, 255, 255, 1)",
              },
            }}
          >
            Войти
          </ReusableButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default HeaderMobileDrower;
