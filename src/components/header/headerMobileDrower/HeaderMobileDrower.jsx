import React from "react";
import { Box, Drawer, IconButton, List, Typography } from "@mui/material";
import { pages } from "../../../data";
import { ArrDown, RuFlag } from "../../../assets/headerIcons/HeaderIcons";
import ReusableButton from "../../ui/ReusableButton";
import MobileProfileMenu from "./mobileProfileMenu/MobileProfileMenu";
import MobileNavs from "./mobileNavs/MobileNavs";
import MobileLangChange from "./mobileLangChange/MobileLangChange";

const HeaderMobileDrower = ({
  openMenu,
  toggleDrawer,
  activeLink,
  setOpen,
  setOpenMenu,
  handleLinkClick,
  setIsRegistered,
  isAuth,
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
            {isAuth ? <MobileProfileMenu /> : ""}

            {pages.map((item) => (
              <MobileNavs
                key={item.id}
                item={item}
                handleLinkClick={handleLinkClick}
                activeLink={activeLink}
                {...item}
              />
            ))}

            <MobileLangChange />
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
