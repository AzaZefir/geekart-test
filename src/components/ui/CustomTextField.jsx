import React from "react";
import { Box, InputLabel, OutlinedInput } from "@mui/material";

function CustomTextField({ label, placeholder, ...props }) {
  return (
    <Box {...props}>
      <InputLabel
        shrink
        sx={{
          color: "rgba(123, 126, 165, 1)",
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: "400",
          transform: "unset",
          mb: "5px",
        }}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        placeholder={placeholder}
        notched
        label={label}
        fullWidth
        sx={{
          backgroundColor: "rgba(241, 243, 247, 1)",
          borderRadius: "10px",
          boxSizing: "border-box",
          height: "40px",
          "& .MuiOutlinedInput-input": {
            padding: "8.5px",
            "&::placeholder": {
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "-0.5px",
              fontWeight: "500",
              color: "rgba(147, 149, 184, 1)",
              opacity: "0.9",
            },
          },
        }}
      />
    </Box>
  );
}

export default CustomTextField;
