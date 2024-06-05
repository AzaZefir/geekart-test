import { Box, Typography } from "@mui/material";
import React from "react";

const BirthDandPhoneInfo = () => {
  return (
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
  );
};

export default BirthDandPhoneInfo;
