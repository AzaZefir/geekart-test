import {
  Box,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import {
  FormModalCameraIcon,
  FormUserIcon,
} from "./../../../../../assets/modal/FormUserIcon";
import CustomTextField from "../../../../../components/ui/CustomTextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  ArrDown,
  RuFlag,
} from "./../../../../../assets/headerIcons/HeaderIcons";

const UserInfoStep = ({ activeStep }) => {
  const [citizenship, setCitizenship] = useState("");
  const [sex, setSex] = useState("");

  const handleCitizenshipChange = (event) => {
    const {
      target: { value },
    } = event;
    setCitizenship(value);
  };

  const handleSexChange = (event) => {
    const {
      target: { value },
    } = event;
    setSex(value);
  };

  return (
    <Fragment>
      {activeStep === 3 && (
        <Box
          sx={{
            overflow: { mobile: "scroll", mobileL: "unset" },
            height: { mobile: "500px", mobileL: "unset" },
          }}
        >
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
              gridTemplateColumns: {
                mobile: "repeat(1, 1fr)",
                mobileL: "repeat(2, 1fr)",
              },
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

            <Box>
              <InputLabel
                sx={{
                  color: "rgba(123, 126, 165, 1)",
                  fontSize: "12px",
                  lineHeight: "18px",
                  fontWeight: "400",
                  transform: "unset",
                  mb: "5px",
                }}
                id="sexLabel"
              >
                Пол
              </InputLabel>

              <Select
                IconComponent={ArrDown}
                labelId="sexLabel"
                id="sex"
                label="Пол"
                value={sex}
                input={<OutlinedInput />}
                displayEmpty
                onChange={handleSexChange}
                renderValue={(selected) => {
                  if (selected === "") {
                    return (
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: "20px",
                          letterSpacing: "-0.5px",
                          fontWeight: "500",
                          color: "rgba(147, 149, 184, 1)",
                          opacity: "0.9",
                        }}
                      >
                        Выберите пол
                      </p>
                    );
                  }

                  return selected;
                }}
                sx={{
                  width: "100%",
                  backgroundColor: "rgba(241, 243, 247, 1)",
                  height: "40px",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-input": {
                    p: "0 16px 0 9px ",
                    width: "85%",
                  },
                }}
              >
                <MenuItem disabled value="">
                  <p>Выберите пол</p>
                </MenuItem>
                <MenuItem value="Мужской">Мужской</MenuItem>
                <MenuItem value="Женский">Женский</MenuItem>
              </Select>
            </Box>

            <Box>
              <InputLabel
                sx={{
                  color: "rgba(123, 126, 165, 1)",
                  fontSize: "12px",
                  lineHeight: "18px",
                  fontWeight: "400",
                  transform: "unset",
                  mb: "5px",
                }}
                id="CitizenshipLabel"
              >
                Гражданство
              </InputLabel>

              <Select
                IconComponent={ArrDown}
                labelId="CitizenshipLabel"
                id="Citizenship"
                label="Гражданство"
                value={citizenship}
                input={<OutlinedInput />}
                displayEmpty
                onChange={handleCitizenshipChange}
                renderValue={(selected) => {
                  if (selected === "") {
                    return (
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: "20px",
                          letterSpacing: "-0.5px",
                          fontWeight: "500",
                          color: "rgba(147, 149, 184, 1)",
                          opacity: "0.9",
                        }}
                      >
                        Выберите страну
                      </p>
                    );
                  }

                  return selected;
                }}
                sx={{
                  width: "100%",
                  backgroundColor: "rgba(241, 243, 247, 1)",
                  height: "40px",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-input": {
                    p: "0 16px 0 9px ",
                    width: "85%",
                  },
                }}
              >
                <MenuItem disabled value="">
                  <p>Placeholder</p>
                </MenuItem>
                <MenuItem value="Российская Федерация" ч>
                  <RuFlag /> Российская Федерация
                </MenuItem>
                <MenuItem
                  value="Российская Федерация"
                  sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <RuFlag /> Российская Федерация
                </MenuItem>
                <MenuItem
                  value="Российская Федерация"
                  sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <RuFlag /> Российская Федерация
                </MenuItem>
              </Select>
            </Box>
          </Box>
        </Box>
      )}
    </Fragment>
  );
};

export default UserInfoStep;
