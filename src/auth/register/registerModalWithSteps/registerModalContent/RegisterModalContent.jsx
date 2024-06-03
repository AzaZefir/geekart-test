import {
  Box,
  Divider,
} from "@mui/material";
import React from "react";
import KindOfSportStep from "./registerSteps/KindOfSportStep";
import SportsmanStep from "./registerSteps/SportsmanStep";
import OrganizationStep from "./registerSteps/OrganizationStep";
import UserInfoStep from "./registerSteps/UserInfoStep";
import RegisterModalFooter from "./registerModalFooter/RegisterModalFooter";

const RegisterModalContent = ({
  selectedImages,
  handleClick,
  activeStep,
  handleBack,
  handleSkip,
  handleNext,
}) => {
  return (
    <Box sx={{ pt: "0" }}>
      <KindOfSportStep
        activeStep={activeStep}
        selectedImages={selectedImages}
        handleClick={handleClick}
      />

      <SportsmanStep activeStep={activeStep} />

      <OrganizationStep activeStep={activeStep} />

      <UserInfoStep activeStep={activeStep} />

      <Divider sx={{ width: "100%" }} />

      <RegisterModalFooter
        handleBack={handleBack}
        handleSkip={handleSkip}
        handleNext={handleNext}
        activeStep={activeStep}
      />
    </Box>
  );
};

export default RegisterModalContent;
