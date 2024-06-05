import React, { Fragment } from "react";
import { Box } from "@mui/material";
import ImagesGrid from "../../../../../components/ui/ImagesGrid";
import { kindOfSportsData } from "../../../../../data";
import MobileScrollLines from "../../../../../components/ui/MobileScrollLines";

const KindOfSportStep = ({ activeStep, selectedImages, handleClick }) => {
  return (
    <Fragment>
      {activeStep === 0 && (
        <Box
          sx={{
            mt: "28px",
            p: "0 24px 16px 24px",
            overflow: { mobile: "scroll", mobileL: "unset" },
            height: { mobile: "500px", mobileL: "unset" },
          }}
        >
          <MobileScrollLines bottom="5px" />
          <ImagesGrid
            data={kindOfSportsData}
            type="stepper"
            selectedImages={selectedImages}
            style={{
              cursor: "pointer",
            }}
            gap={20}
            onClick={handleClick}
          />
        </Box>
      )}
    </Fragment>
  );
};

export default KindOfSportStep;
