import React, { Fragment } from "react";
import {
  Box,
  Checkbox,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { SearchIcon } from "../../../../../assets/modal/SearchIcon";
import ReusableButton from "../../../../../components/ui/ReusableButton";
import { organizationsData } from "../../../../../data";
import {
  organizationsWrapperStyles,
  organizationsImageWrapperStyles,
  searchInputBtnStyles,
  organizationsImageStyles,
  organizationsCheckboxStyles,
} from "../../../RegisterStyles";

const OrganizationStep = ({ activeStep }) => {
  return (
    <Fragment>
      {activeStep === 2 && (
        <>
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              mt: "46px",
              p: "0 24px 0 24px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Поиск"
              sx={{
                backgroundColor: "rgba(248, 248, 249, 1)",
                borderRadius: "10px",
                boxSizing: "border-box",
                height: "40px",
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
                "& .MuiOutlinedInput-input": {
                  padding: "8.5px 0",
                },
              }}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ padding: "0" }}>
                    <IconButton edge="start" aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <ReusableButton
              buttonStyles={{
                ...searchInputBtnStyles,
                display: activeStep === 0 ? "none" : "block",
              }}
            >
              Найти
            </ReusableButton>
          </Box>
          <Box sx={organizationsWrapperStyles}>
            {organizationsData.map((s) => (
              <Box
                key={s.id}
                sx={{
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box component="figure" sx={organizationsImageWrapperStyles}>
                    <img src={s.img} alt={s.name} sx={{ overflow: "hidden" }} />
                  </Box>
                  <Box sx={{ my: "6px" }}>
                    <Typography
                      variant="h6"
                      component="p"
                      sx={organizationsImageStyles}
                    >
                      {s.name}
                    </Typography>
                  </Box>
                </Box>
                <Checkbox sx={organizationsCheckboxStyles} />
              </Box>
            ))}
          </Box>
        </>
      )}
    </Fragment>
  );
};

export default OrganizationStep;
