import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";
import { FormUserIcon } from "../../../../assets/modal/FormUserIcon";
import { RuFlag } from "../../../../assets/headerIcons/HeaderIcons";
import ReusableButton from "../../../ui/ReusableButton";
import { InfoIcon } from "../../../../assets/profileIcons/ProfileIcons";
import { subscribersData, subscriptionsData } from "../../../../data";

const MainUserInfo = ({ isAuth }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: "28px",
        width: { mobile: "100%", laptopL: "unset" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { mobile: "column", laptopL: "row" },
          width: { mobile: "100%", laptopL: "unset" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="figure"
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { mobile: "100px", laptopL: "140px" },
            height: { mobile: "100px", laptopL: "140px" },
            mb: { mobile: "16px", laptopL: "0" },
            borderRadius: "50%",
            backgroundColor: "#CCCFDA",
            m: "0",
            mr: "16px",
          }}
        >
          {!isAuth ? (
            <FormUserIcon />
          ) : (
            <img
              src="/sportsman1.png"
              alt="user avatar"
              style={{ width: "100%", objectFit: "cover" }}
            />
          )}
        </Box>
        <Box>
          <Typography
            component="p"
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { mobile: "center", laptopL: "flex-start" },
              gap: "10px",
            }}
          >
            <RuFlag /> Российская Федерация
          </Typography>

          <Typography
            component="h2"
            sx={{
              mt: "12px",
              mb: "36px",
              color: "rgba(6, 8, 44, 1)",
              fontSize: "30px",
              lineHeight: "32px",
              letterSpacing: "-1%",
              fontWeight: "600",
              textAlign: { mobile: "center", laptopL: "start" },
            }}
          >
            Александр Магомедов
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { mobile: "center", laptopL: "flex-start" },
              gap: "32px",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: { mobile: "column", laptopL: "row" },
                alignItems: { mobile: "start", laptopL: "center" },
                gap: "8px",
              }}
            >
              <AvatarGroup max={2}>
                {subscribersData.map((p) => (
                  <Avatar
                    key={p.id}
                    sx={{ width: "22px", height: "22px" }}
                    alt={p.name}
                    src={p.icon}
                  />
                ))}
              </AvatarGroup>
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Typography variant="body2" sx={{ color: "rgba(6, 8, 44, 1)" }}>
                  2
                </Typography>{" "}
                Подписчики
              </Box>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: { mobile: "column", laptopL: "row" },
                alignItems: { mobile: "start", laptopL: "center" },
                gap: "8px",
              }}
            >
              <AvatarGroup max={3}>
                {subscriptionsData.map((p) => (
                  <Avatar
                    key={p.id}
                    sx={{ width: "22px", height: "22px" }}
                    alt={p.name}
                    src={p.icon}
                  />
                ))}
              </AvatarGroup>
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Typography variant="body2" sx={{ color: "rgba(6, 8, 44, 1)" }}>
                  10
                </Typography>{" "}
                Подписки
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: { mobile: "100%", laptopL: "unset" } }}>
        <ReusableButton
          buttonStyles={{
            backgroundColor: "rgba(53, 55, 84, 1)",
            height: "34px",
            width: { mobile: "100%", laptopL: "max-content" },
            gap: "10px",
            p: "8px 12px 8px 12px",
            color: "rgba(255, 255, 255, 1)",
            fontSize: "12px",
            fontWeight: "600",
            lineHeight: "18px",
            letterSpacing: "-0.1px",
            "&:hover": {
              backgroundColor: " rgba(255, 255, 255, 1)",
              color: "rgba(53, 55, 84, 1)",
            },
          }}
        >
          <InfoIcon />
          Подтвердите личность для доступа к новым функциям
        </ReusableButton>
      </Box>
    </Box>
  );
};

export default MainUserInfo;
