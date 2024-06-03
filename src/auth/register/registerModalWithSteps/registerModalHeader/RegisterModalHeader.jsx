import { Box, Typography } from "@mui/material";
import React from "react";
import { CloseIcon } from "../../../../assets/headerIcons/HeaderIcons";
import { steps } from "../../../../data";

const RegisterModalHeader = ({ handleCloseStepper, activeStep }) => {
  return (
    <Box sx={{ p: "34px 24px 0 24px" }}>
      <Box
        component="figure"
        sx={{
          cursor: "pointer",
          margin: "0",
          position: "absolute",
          right: "16px",
          top: "16px",
        }}
        onClick={handleCloseStepper}
      >
        <CloseIcon />
      </Box>

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
            sx={{
              mt: "16px",
              textAlign: "start",
              fontSize: "12px",
              lineHeight: "18px",
              letterSpacing: "-0.1px",
              fontWeight: "600",
              color: "rgba(147, 149, 184, 1)",
            }}
          >
            Выберите одного или нескольких спортсменов из списка предложенных.
          </Typography>
        ) : activeStep === 2 ? (
          <Typography
            id="modal-modal-description"
            component="p"
            sx={{
              mt: "16px",
              textAlign: "start",
              fontSize: "12px",
              lineHeight: "18px",
              letterSpacing: "-0.1px",
              fontWeight: "600",
              color: "rgba(147, 149, 184, 1)",
            }}
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
