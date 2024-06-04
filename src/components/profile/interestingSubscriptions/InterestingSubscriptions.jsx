import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { interstingSubscribesData } from "../../../data";
import {
  AddUserIcon,
  VerifiedIcon,
} from "../../../assets/profileIcons/ProfileIcons";
import ReusableButton from "../../ui/ReusableButton";

const InterestingSubscriptions = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 1)",
        p: "24px 20px",
        borderRadius: "20px",
        boxSizing: "border-box"
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
                  <img src={p.avatar} alt="subs" style={{ width: "100%" }} />

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
                      width: { mobile: "150px", laptopL: "216px" },
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
  );
};

export default InterestingSubscriptions;
