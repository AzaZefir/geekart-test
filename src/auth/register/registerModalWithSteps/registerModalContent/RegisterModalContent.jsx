import React, { useEffect } from "react";
import { Box, Divider } from "@mui/material";
import KindOfSportStep from "./registerSteps/KindOfSportStep";
import SportsmanStep from "./registerSteps/SportsmanStep";
import OrganizationStep from "./registerSteps/OrganizationStep";
import UserInfoStep from "./registerSteps/UserInfoStep";
import RegisterModalFooter from "./registerModalFooter/RegisterModalFooter";
import { useForm } from "react-hook-form";
import { AuthState } from "../../../../context/AuthProvider";

const RegisterModalContent = ({
  selectedImages,
  handleClick,
  activeStep,
  handleBack,
  handleSkip,
  handleNext,
  handleCloseStepper,
  setActiveStep,
}) => {
  const { handleSubmit } = useForm();
  const { setIsAuth } = AuthState();

  const onSubmit = (data) => {
    console.log(data);
    handleCloseStepper(true);
    setActiveStep(0);
    setIsAuth(true);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ pt: "0" }}>
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
        handleSubmit={handleSubmit}
        handleBack={handleBack}
        handleSkip={handleSkip}
        handleNext={handleNext}
        activeStep={activeStep}
      />
    </Box>
  );
};

export default RegisterModalContent;
