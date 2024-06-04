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
  handleSubmit,
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
            width: { mobile: "100%", mobileL: "max-content" },
            mb: { mobile: "16px", mobileL: "initial" },
          }}
        >
          Назад
        </ReusableButton>
        <ReusableButton
          onClick={handleNext}
          buttonStyles={{
            ...backBtnStyles,
            width: { mobile: "100%", mobileL: "max-content" },
          }}
        >
          Пропустить
        </ReusableButton>
      </Box>

      <ReusableButton
        onClick={activeStep === 4 ? handleSubmit : handleNext}
        buttonStyles={{
          ...continueBtnStyles,
          width: { mobile: "100%", mobileL: "max-content" },
          mt: { mobile: "16px", mobileL: "initial" },
        }}
        type={activeStep === 4 ? "submit" : "button"}
      >
        Продолжить
      </ReusableButton>
    </Box>
  );
};

export default RegisterModalFooter;
