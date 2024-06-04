import { Box } from "@mui/material";
import React from "react";
import ReusableButton from "../../../../../components/ui/ReusableButton";
import { steps } from "../../../../../data";
import {
  backBtnStyles,
  backSkipBtnsWrapperStyles,
  continueBtnStyles,
  modalFooterWrapperStyles,
} from "../../../RegisterStyles";

const RegisterModalFooter = ({
  handleBack,
  activeStep,
  handleSkip,
  handleNext,
}) => {
  return (
    <Box sx={modalFooterWrapperStyles}>
      <Box sx={backSkipBtnsWrapperStyles}>
        <ReusableButton
          onClick={handleBack}
          disabled={activeStep === 0}
          buttonStyles={{
            ...backBtnStyles,
            display: activeStep === 0 ? "none" : "block",
          }}
        >
          Назад
        </ReusableButton>
        <ReusableButton onClick={handleSkip} buttonStyles={backBtnStyles}>
          Пропустить
        </ReusableButton>
      </Box>

      <ReusableButton
        onClick={handleNext}
        disabled={activeStep === steps.length - 1}
        buttonStyles={continueBtnStyles}
      >
        Продолжить
      </ReusableButton>
    </Box>
  );
};

export default RegisterModalFooter;
