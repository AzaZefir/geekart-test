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
          gridTemplateColumns: "765px 1fr",
          mt: "24px",
        }}
      >
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
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "flex-start",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box
                component="figure"
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "140px",
                  height: "140px",
                  borderRadius: "250px",
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
                    justifyContent: "flex-start",
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
                  }}
                >
                  Александр Магомедов
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "32px",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(6, 8, 44, 1)" }}
                    >
                      2
                    </Typography>{" "}
                    Подписчики
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(6, 8, 44, 1)" }}
                    >
                      10
                    </Typography>{" "}
                    Подписки
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <ReusableButton
                buttonStyles={{
                  backgroundColor: "rgba(53, 55, 84, 1)",
                  height: "34px",
                  width: "max-content",
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
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ReusableButton
              buttonStyles={{
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

        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            p: "24px 20px",
            borderRadius: "20px",
          }}
        >
          <Typography variant="h1" component="h6">
            Интересные подписки
          </Typography>

          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "column",
                gap: "10px",
                mt: "24px",
                mb: "20px",
              }}
            >
              {interstingSubscribesData.map((p) => (
                <Box
                  key={p.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "24px",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "10px",
                    }}
                  >
                    <Box
                      component="figure"
                      sx={{
                        width: "41px",
                        height: "41px",
                        m: "0",
                        position: "relative",
                      }}
                    >
                      <img
                        src={p.avatar}
                        alt="subs"
                        style={{ width: "100%" }}
                      />

                      <Typography
                        component="span"
                        sx={{
                          position: "absolute",
                          right: "-5px",
                          top: "22px",
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          backgroundColor: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          p: "1px",
                        }}
                      >
                        <img
                          src={p.country}
                          alt="flag"
                          style={{
                            width: "100%",
                            objectFit: "cover",
                            height: "100%",
                            borderRadius: "50%",
                          }}
                        />
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(6, 8, 44, 1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        {p.name}
                        {p.verified ? <VerifiedIcon /> : ""}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          lineHeight: "18px",
                          fontWeight: "400",
                          display: "-webkit-box",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 1,
                          width: "216px",
                        }}
                      >
                        {p.sport}{" "}
                        <Box
                          component="span"
                          sx={{
                            display: "inline-block",
                            width: "3px",
                            height: "3px",
                            backgroundColor: "#9395B8",
                            borderRadius: "50%",
                            m: "1.4px",
                          }}
                        />{" "}
                        {p.destinetions}
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton
                    sx={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "rgba(241, 243, 247, 1)",
                      borderRadius: "10px",
                    }}
                  >
                    <AddUserIcon />
                  </IconButton>
                </Box>
              ))}
            </Box>

            <ReusableButton
              variant="h6"
              buttonStyles={{
                backgroundColor: "rgba(241, 243, 247, 1)",
                height: "34px",
                width: "100%",
                gap: "10px",
                p: "8px 12px 8px 12px",
                color: "rgba(53, 55, 84, 1)",
                fontSize: "12px",
                fontWeight: "600",
                lineHeight: "18px",
                letterSpacing: "-0.1px",
                "&:hover": {
                  backgroundColor: "rgba(6, 8, 44, 1)",
                  color: " rgba(241, 243, 247, 1)",
                },
              }}
            >
              Смотреть всех
            </ReusableButton>
          </Box>
        </Box>
      </Box>
    </MaxWidthWrapper>
  );
};

export default ProfilePage;
