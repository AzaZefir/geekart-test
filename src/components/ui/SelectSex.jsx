import {
  Box,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React from "react";
import { ArrDown } from "../../assets/headerIcons/HeaderIcons";

const SelectSex = ({ handleSexChange, sex }) => {
  return (
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
            width: "80%",
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
  );
};

export default SelectSex;
