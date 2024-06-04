import { Box, IconButton, InputLabel } from "@mui/material";
import React, { Fragment } from "react";
import {
  FormModalCameraIcon,
  FormUserIcon,
} from "./../../../../../assets/modal/FormUserIcon";
import CustomTextField from "../../../../../components/ui/CustomTextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const UserInfoStep = ({ activeStep }) => {
  return (
    <Fragment>
      {activeStep === 3 && (
        <Box sx={{overflow: { mobile: "scroll", mobileL: "unset" },
        height: { mobile: "500px", mobileL: "unset" },}}>
          <Box sx={{ m: "16px 24px 32px 24px" }}>
            <Box
              component="figure"
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100px",
                height: "100px",
                borderRadius: "250px",
                backgroundColor: "#CCCFDA",
                m: "0",
              }}
            >
              <FormUserIcon />
              <IconButton
                sx={{
                  position: "absolute",
                  left: "68px",
                  top: "68px",
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#F1F3F7",
                }}
              >
                <FormModalCameraIcon />
              </IconButton>
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              columnGap: "20px",
              rowGap: "24px",
              gridTemplateColumns: { mobile: "repeat(1, 1fr)", mobileL: "repeat(2, 1fr)" },
              m: "0 24px 83px 24px",
            }}
          >
            <CustomTextField label="Имя" placeholder="Введите имя" />
            <CustomTextField label="Фамилия" placeholder="Введите фамилию" />
            <CustomTextField
              label="Отчество (необязательно)"
              placeholder="Введите отчество"
            />
            <CustomTextField
              label="Дата рождения"
              placeholder="Выберите дату"
            />

            <CustomTextField label="Пол" placeholder="Выберите пол" />
            <CustomTextField
              label="Гражданство"
              placeholder="Выберите страну"
            />
          </Box>
        </Box>
      )}
    </Fragment>
  );
};

export default UserInfoStep;
