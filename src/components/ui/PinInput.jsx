import React, { useRef } from "react";
import { styled } from "@mui/system";
import { TextField, Box } from "@mui/material";
import { Controller } from "react-hook-form";

const StyledInput = styled(TextField)({
  "& input[type=number]": {
    appearance: "none",
    "&::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "&::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    textAlign: "center",
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: "rgba(241, 243, 247, 1)",
    padding: "0",
    outline: "0",
  },
});

const PinInput = ({ onComplete, control, errors, isError }) => {
  const inputsRef = useRef([]);
  const pinLength = 6;
  const pinCode = useRef(Array(pinLength).fill(""));

  const handleInputChange = (index, e, onChange) => {
    const input = e.target;
    const value = input.value;

    if (!isNaN(value)) {
      if (value.length > 1) {
        input.value = value.slice(0, 1);
      }

      pinCode.current[index] = value;

      if (index < pinLength - 1 && value !== "") {
        inputsRef.current[index + 1].focus();
      }

      const updatedPinCode = pinCode.current.join("");
      onChange(updatedPinCode);

      if (onComplete) {
        onComplete(updatedPinCode);
      }
    }
  };

  const handleBackspace = (index, e) => {
    if (index > 0 && e.key === "Backspace" && e.target.value === "") {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <Controller
      name="pin"
      control={control}
      render={({ field: { value, onChange, ref } }) => (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            border: "none",
            justifyContent: "space-between",
            gap: "8px",
            marginBottom: errors.pin || isError !== "" ? "4px" : "24px",
          }}
        >
          {[...Array(pinLength)].map((_, index) => (
            <Box
              sx={{
                border:
                  errors.pin || isError !== ""
                    ? "1px solid rgba(210, 16, 16, 1)"
                    : "",
                borderRadius: "10px",
              }}
              key={index}
            >
              <StyledInput
                variant="outlined"
                inputRef={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => {
                  if (
                    pinCode.current.join("").length < pinLength ||
                    e.target.value.length === 0
                  ) {
                    handleInputChange(index, e, onChange);
                  } else {
                    // Запретить дальнейший ввод, если длина пин-кода уже равна 6.
                    e.preventDefault();
                    e.target.value = e.target.value.slice(0, 1);
                  }
                }}
                onKeyDown={(e) => handleBackspace(index, e)}
                inputProps={{
                  type: "number",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  maxLength: 1,
                  ref,
                }}
              />
            </Box>
          ))}
        </Box>
      )}
    />
  );
};

export default PinInput;
