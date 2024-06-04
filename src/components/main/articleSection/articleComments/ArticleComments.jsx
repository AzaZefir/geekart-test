import React from "react";
import { Avatar, Box, Button, Typography, styled } from "@mui/material";

const CustomButton = styled(Button)({
  all: "inherit",
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "-0.5px",
  fontWeight: "500",
  color: "#353754",
  cursor: "pointer",
  "&:hover": {
    color: "#7B7EA5",
    fontWeight: "500",
    backgroundColor: "inherit",
  },
});

const ArticleComments = () => {
  return (
    <Box sx={{ mt: "16px" }}>
      <Box sx={{ display: "flex", gap: "12px", mb: "16px" }}>
        <Avatar alt="Remy Sharp" src="/avatar1.png" />
        <Box>
          <Typography variant="h6" sx={{ mb: "4px" }}>
            Вадим Давыдов
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#06082C", mb: "8px", fontWeight: "548" }}
          >
            Наконец-то! Рад, что он вернулся в спорт
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography variant="body2">15 минут назад</Typography>
            <CustomButton
              variant="body2"
              sx={{ fontWeight: "548" }}
              type="button"
            >
              Ответить
            </CustomButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "12px", ml: "32px" }}>
        <Avatar alt="Remy Sharp" src="/avatar2.png" />
        <Box>
          <Typography variant="h6" sx={{ mb: "4px" }}>
            Артем Еременко
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#06082C", mb: "8px", fontWeight: "548" }}
          >
            Вадим, согласен! Уже давно ждал интервью!
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography variant="body2">30 секунд назад</Typography>
            <CustomButton
              variant="body2"
              sx={{ fontWeight: "548" }}
              type="button"
            >
              Ответить
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ArticleComments;
