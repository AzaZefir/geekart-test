import React from "react";
import { Box } from "@mui/material";
import { AuthState } from "./../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import UserInfoFooterBtns from "./footerBtns/UserInfoFooterBtns";
import BirthDandPhoneInfo from "./birthDandPhoneInfo/BirthDandPhoneInfo";
import MainUserInfo from "./mainUserInfo/MainUserInfo";

const UserInfoSection = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = AuthState();

  const handleLogout = () => {
    setIsAuth(false);
    navigate("/");
  };

  return (
    <Box
      sx={{
        padding: "24px 20px 40px 20px",
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: "20px",
        display: "flex",
        alignItems: "start",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: "40px",
        boxSizing: "border-box",
      }}
    >
      <MainUserInfo isAuth={isAuth} />

      <BirthDandPhoneInfo />

      <UserInfoFooterBtns handleLogout={handleLogout} />
    </Box>
  );
};

export default UserInfoSection;
