import React from "react";
import MaxWidthWrapper from "./../components/maxWidthWrapper/MaxWidthWrapper";
import { Box } from "@mui/material";
import InterestingSubscriptions from "../components/profile/interestingSubscriptions/InterestingSubscriptions";
import UserInfoSection from "../components/profile/userInfoSection/UserInfoSection";

const ProfilePage = () => {
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
        <UserInfoSection />

        <InterestingSubscriptions />
      </Box>
    </MaxWidthWrapper>
  );
};

export default ProfilePage;
