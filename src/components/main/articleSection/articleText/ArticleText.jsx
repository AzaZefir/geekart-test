import React, { useState } from "react";
import { Button, Typography, styled } from "@mui/material";
import { customButtonStyle } from "./ArticleTextStyles";

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

const ArticleText = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Typography component="p" variant="body2" sx={{ mb: "20px" }}>
      Илья Бессонов дал интервью после большого перерыва, где поделился секретом
      своего успеха и рассказал методики своих тренировок. Спортсмен сделал
      заявление, что возвращается в спорт и {!isExpanded && "..."}{" "}
      {isExpanded ? (
        <>
          также отметил, что планирует участвовать в следующих Олимпийских играх
          и поделился своими мыслями о будущем спорта. Его тренировки включают в
          себя разнообразные методики, направленные на повышение выносливости и
          силы. Бессонов подчеркнул важность ментальной подготовки и правильного
          питания для достижения высоких результатов.{" "}
          <CustomButton
            sx={customButtonStyle}
            variant="body2"
            onClick={handleReadMoreClick}
          >
            Читать меньше
          </CustomButton>
        </>
      ) : (
        <CustomButton
          sx={customButtonStyle}
          variant="body2"
          onClick={handleReadMoreClick}
        >
          Читать больше
        </CustomButton>
      )}
    </Typography>
  );
};

export default ArticleText;
