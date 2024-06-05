import React from "react";
import { Box, Typography } from "@mui/material";
import { steps } from "../../../../data";
import CloseBtnUi from "../../../../components/ui/CloseBtnUi";
import { descriptionOfModalContentStyles } from "../../RegisterStyles";

const RegisterModalHeader = ({ handleCloseStepper, activeStep }) => {
  return (
    <Box sx={{ p: "34px 24px 0 24px" }}>
      <CloseBtnUi onClick={handleCloseStepper} />

      <Box sx={{ textAlign: "start", marginBottom: "12px" }}>
        <Typography
          variant="h1"
          component="span"
          sx={{ color: "rgba(147, 149, 184, 1)" }}
        >
          {activeStep + 1}/4
        </Typography>
        <Typography
          variant="h1"
          component="span"
          sx={{ marginLeft: "12px", color: "rgba(6, 8, 44, 1)" }}
        >
          {steps[activeStep]}
        </Typography>
        {activeStep === 1 ? (
          <Typography
            id="modal-modal-description"
            component="p"
            sx={descriptionOfModalContentStyles}
          >
            Выберите одного или нескольких спортсменов из списка предложенных.
          </Typography>
        ) : activeStep === 2 ? (
          <Typography
            id="modal-modal-description"
            component="p"
            sx={descriptionOfModalContentStyles}
          >
            Выберите организации из списка предложенных.
          </Typography>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default RegisterModalHeader;
