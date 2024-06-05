import {
  Box,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React from "react";
import { ArrDown, RuFlag } from "../../assets/headerIcons/HeaderIcons";

const SelectCitizenShip = ({ citizenship, handleCitizenshipChange }) => {
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
            width: "80%",
          },
        }}
      >
        <MenuItem disabled value="">
          <p>Placeholder</p>
        </MenuItem>
        <MenuItem value="Российская Федерация">
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
  );
};

export default SelectCitizenShip;
