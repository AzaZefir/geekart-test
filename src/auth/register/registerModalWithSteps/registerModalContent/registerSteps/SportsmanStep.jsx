import React, { Fragment } from "react";
import {
  Box,
  Checkbox,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import {
  ChechBoxIcon,
  CheckedCheckboxIcon,
  SearchIcon,
} from "../../../../../assets/modal/FormUserIcon";
import ReusableButton from "../../../../../components/ui/ReusableButton";
import { sportsmansData } from "../../../../../data";
import {
  sportsmanWrapperStyles,
  sportsmansContentWrapperStyles,
  sportsmansImageWrapperStyles,
  sportsmansSearchInputBtnStyles,
  sportsmansSearchInputStyles,
} from "../../../RegisterStyles";

const SportsmanStep = ({ activeStep }) => {
  return (
    <Fragment>
      {activeStep === 1 && (
        <>
          <Box sx={sportsmanWrapperStyles}>
            <TextField
              variant="outlined"
              placeholder="Поиск"
              sx={sportsmansSearchInputStyles}
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
            <ReusableButton buttonStyles={sportsmansSearchInputBtnStyles}>
              Найти
            </ReusableButton>
          </Box>
          <Box sx={sportsmansContentWrapperStyles}>
            {sportsmansData.map((s) => (
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
                  <Box component="figure" sx={sportsmansImageWrapperStyles}>
                    <img src={s.img} alt={s.name} sx={{ overflow: "hidden" }} />
                  </Box>
                  <Box sx={{ my: "6px" }}>
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{ color: "rgba(6, 8, 44, 1)" }}
                    >
                      {s.name}
                    </Typography>
                    <Typography variant="h6" component="p">
                      {s.title}
                    </Typography>
                  </Box>
                </Box>
                <Checkbox
                  icon={<ChechBoxIcon />}
                  checkedIcon={<CheckedCheckboxIcon />}
                />
              </Box>
            ))}
          </Box>
        </>
      )}
    </Fragment>
  );
};

export default SportsmanStep;
