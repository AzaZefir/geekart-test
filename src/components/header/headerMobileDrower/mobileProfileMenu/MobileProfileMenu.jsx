import { Box, Divider, Link, Typography } from "@mui/material";
import React from "react";
import { ArrDown } from "../../../../assets/headerIcons/HeaderIcons";

const MobileProfileMenu = () => {
  return (
    <>
      <Link
        href="/profile"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 14px 15px 8px",
          textDecoration: "none",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box
            component="figure"
            sx={{ width: "36px", height: "36px", m: "0" }}
          >
            <img
              src="/sportsman1.png"
              alt="user avatar"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Box>
          <Typography
            variant="body2"
            sx={{ fontWeight: "548", color: "rgba(6, 8, 44, 1)" }}
          >
            Профиль
          </Typography>
        </Box>
        <ArrDown />
      </Link>
      <Divider sx={{ mb: "8px" }} />
    </>
  );
};

export default MobileProfileMenu;
