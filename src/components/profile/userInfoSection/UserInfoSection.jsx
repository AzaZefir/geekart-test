import {
  Avatar,
  AvatarGroup,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ReusableButton from "./../../ui/ReusableButton";
import { InfoIcon, ShareIcon } from "../../../assets/profileIcons/ProfileIcons";
import { RuFlag } from "../../../assets/headerIcons/HeaderIcons";
import { FormUserIcon } from "../../../assets/modal/FormUserIcon";

const UserInfoSection = ({ isAuth, handleLogout }) => {
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
                <AvatarGroup max={4}>
                  <Avatar
                    sx={{ width: "22px", height: "22px" }}
                    alt="Remy Sharp"
                    src="/subs4.png"
                  />
                  <Avatar
                    sx={{ width: "22px", height: "22px" }}
                    alt="Travis Howard"
                    src="/subs3.png"
                  />
                  <Avatar
                    sx={{ width: "22px", height: "22px" }}
                    alt="Cindy Baker"
                    src="/subs2.png"
                  />
                </AvatarGroup>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(6, 8, 44, 1)" }}
                  >
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
                <AvatarGroup max={4}>
                  <Avatar
                    sx={{ width: "22px", height: "22px" }}
                    alt="Remy Sharp"
                    src="/subs2.png"
                  />
                  <Avatar
                    sx={{ width: "22px", height: "22px" }}
                    alt="Travis Howard"
                    src="/subs3.png"
                  />
                  <Avatar
                    sx={{ width: "22px", height: "22px" }}
                    alt="Cindy Baker"
                    src="/subs4.png"
                  />
                  <Avatar
                    sx={{ width: "22px", height: "22px" }}
                    alt="Cindy Baker"
                    src="/subs5.png"
                  />
                </AvatarGroup>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(6, 8, 44, 1)" }}
                  >
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { mobile: "column", laptopL: "row" },
          width: "100%",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: "rgba(248, 248, 249, 1)",
            p: "12px 14px",
            boxSizing: "border-box",
            borderRadius: "12px",
          }}
        >
          <Typography variant="body2" sx={{ mb: "4px" }}>
            День рождения
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(6, 8, 44, 1)" }}>
            12 сентября 1994
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "rgba(248, 248, 249, 1)",
            p: "12px 14px",
            boxSizing: "border-box",
            borderRadius: "12px",
          }}
        >
          <Typography variant="body2" sx={{ mb: "4px" }}>
            Номер телефона
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(6, 8, 44, 1)" }}>
            +7 (773) 493 39 10
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: { mobile: "100%", mobileL: "max-content" },
        }}
      >
        <ReusableButton
          buttonStyles={{
            width: { mobile: "100%", laptopL: "max-content" },
            backgroundColor: "rgba(6, 8, 44, 1)",
            p: "10px 24px 10px 24px",
            color: "rgba(255, 255, 255, 1)",
            "&:hover": {
              backgroundColor: " rgba(255, 255, 255, 1)",
              color: "rgba(53, 55, 84, 1)",
            },
          }}
        >
          Редактировать
        </ReusableButton>
        <IconButton
          onClick={handleLogout}
          sx={{
            width: "40px",
            height: "40px",
            backgroundColor: "rgba(241, 243, 247, 1)",
            borderRadius: "10px",
          }}
        >
          <ShareIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default UserInfoSection;
