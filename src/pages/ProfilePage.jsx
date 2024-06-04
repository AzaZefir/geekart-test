import React from "react";
import MaxWidthWrapper from "./../components/maxWidthWrapper/MaxWidthWrapper";
import { Box, IconButton, Typography } from "@mui/material";
import { FormUserIcon } from "../assets/modal/FormUserIcon";
import { RuFlag } from "../assets/headerIcons/HeaderIcons";
import ReusableButton from "../components/ui/ReusableButton";
import {
  AddUserIcon,
  InfoIcon,
  ShareIcon,
  VerifiedIcon,
} from "./../assets/profileIcons/ProfileIcons";
import { interstingSubscribesData } from "../data";
import { AuthState } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import InterestingSubscriptions from "../components/profile/interestingSubscriptions/InterestingSubscriptions";
import UserInfoSection from "../components/profile/userInfoSection/UserInfoSection";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = AuthState();

  const handleLogout = () => {
    setIsAuth(false);
    navigate("/");
  };

  return (
    <MaxWidthWrapper>
      <Box
        component="section"
        sx={{
          display: "grid",
          columnGap: "20px",
          rowGap: "20px",
          gridTemplateColumns: {
            mobile: "1fr ",
            laptopL: "765px 1fr",
          },
          mt: "24px",
        }}
      >
        <UserInfoSection isAuth={isAuth} handleLogout={handleLogout} />

        <InterestingSubscriptions />
      </Box>
    </MaxWidthWrapper>
  );
};

export default ProfilePage;
