import { Box } from "@mui/material";
import React from "react";
import ReusableButton from "../../../../../components/ui/ReusableButton";
import { steps } from "../../../../../data";

const RegisterModalFooter = ({
  handleBack,
  activeStep,
  handleSkip,
  handleNext,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: "16px 24px 20px 24px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mr: "16px",
        }}
      >
        <ReusableButton
          onClick={handleBack}
          disabled={activeStep === 0}
          buttonStyles={{
            width: "max-content",
            display: activeStep === 0 ? "none" : "block",
            backgroundColor: "rgba(241, 243, 247, 1)",
            color: "rgba(6, 8, 44, 1)",
            "&:hover": {
              backgroundColor: "rgba(6, 8, 44, 1)",
              color: "rgba(255, 255, 255, 1)",
            },
          }}
        >
          Назад
        </ReusableButton>
        <ReusableButton
          onClick={handleSkip}
          buttonStyles={{
            width: "max-content",
            backgroundColor: "rgba(241, 243, 247, 1)",
            color: "rgba(6, 8, 44, 1)",
            "&:hover": {
              backgroundColor: "rgba(6, 8, 44, 1)",
              color: "rgba(255, 255, 255, 1)",
            },
          }}
        >
          Пропустить
        </ReusableButton>
      </Box>

      <ReusableButton
        onClick={handleNext}
        disabled={activeStep === steps.length - 1}
        buttonStyles={{
          width: "155px",
          minWidth: "0",
          backgroundColor: "rgba(6, 8, 44, 1)",
          color: "rgba(255, 255, 255, 1)",
          "&:hover": {
            backgroundColor: "rgba(241, 243, 247, 1)",
            color: "rgba(6, 8, 44, 1)",
          },
        }}
      >
        Продолжить
      </ReusableButton>
    </Box>
  );
};

export default RegisterModalFooter;
