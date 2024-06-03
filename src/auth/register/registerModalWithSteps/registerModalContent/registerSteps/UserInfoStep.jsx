import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";

const UserInfoStep = ({ activeStep }) => {
  return (
    <Fragment>
      {activeStep === 3 && (
        <Box>
          <Typography>
            Шаг 4: Содержимое для заполнения основных данных
          </Typography>
        </Box>
      )}
    </Fragment>
  );
};

export default UserInfoStep;
