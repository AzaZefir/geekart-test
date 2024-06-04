import React, { useState } from "react";
import { Box, Divider, Modal } from "@mui/material";
import { registerStyles } from "../RegisterStyles";

import RegisterModalHeader from "./registerModalHeader/RegisterModalHeader";
import RegisterModalContent from "./registerModalContent/RegisterModalContent";

const RegisterModalWithSteps = (props) => {
  const { openStepperVarification, setKindOfSports, setStepperVarification } =
    props;

  const [activeStep, setActiveStep] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleClick = (image) => {
    const isSelected = selectedImages.some(
      (selected) => selected.id === image.id
    );
    if (isSelected) {
      setSelectedImages(
        selectedImages.filter((selected) => selected.id !== image.id)
      );
      setKindOfSports((prevKindOfSports) =>
        prevKindOfSports.filter((selected) => selected.id !== image.id)
      );
    } else {
      setSelectedImages([...selectedImages, image]);
      setKindOfSports((prevKindOfSports) => [...prevKindOfSports, image]);
    }
  };

  const handleCloseStepper = () => {
    setStepperVarification(false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {};

  return (
    <Modal
      open={openStepperVarification}
      onClose={handleCloseStepper}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        backdropFilter: "blur(2px)",
      }}
    >
      <Box sx={registerStyles}>
        <RegisterModalHeader
          handleCloseStepper={handleCloseStepper}
          activeStep={activeStep}
        />

        <Divider sx={{ width: "100%" }} />

        <RegisterModalContent
          selectedImages={selectedImages}
          handleClick={handleClick}
          activeStep={activeStep}
          handleBack={handleBack}
          handleSkip={handleSkip}
          handleNext={handleNext}
          handleCloseStepper={handleCloseStepper}
          setActiveStep={setActiveStep}
        />
      </Box>
    </Modal>
  );
};

export default RegisterModalWithSteps;
