import React from "react";
import { Box, InputLabel } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { CalendarIcon } from "../../assets/profileIcons/ProfileIcons";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const CalendarDatePicker = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <InputLabel
        sx={{
          color: "rgba(123, 126, 165, 1)",
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: "400",
          transform: "unset",
          mb: "5px",
        }}
        id="dateLabel"
      >
        Пол
      </InputLabel>
      <LocalizationProvider labelId="dateLabel" dateAdapter={AdapterDayjs}>
        <DatePicker
          sx={{
            width: "100%",
            backgroundColor: "rgba(241, 243, 247, 1)",
            height: "40px",
            borderRadius: "10px",
            "& .MuiOutlinedInput-input": {
              p: "10px 12px ",
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "-0.5px",
              fontWeight: "500",
              color: "rgb(27 32 113)",
              opacity: "0.9",
              width: "82%",
            },
          }}
          slotProps={{ textField: { placeholder: "Выберите дату" } }}
          slots={{
            openPickerIcon: CalendarIcon,
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default CalendarDatePicker;
