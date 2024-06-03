import React, { useRef } from "react";
import { styled } from "@mui/system";
import { TextField, Grid } from "@mui/material";

const PinInputContainer = styled("div")({
  display: "flex",
  width: "100%",
  border: "none",
  justifyContent: "space-between",
  gap: "8px",
  marginBottom: "24px",
});

const PinInputItem = styled(Grid)({
  //   width: "40px",
});

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

const PinInput = ({ onComplete }) => {
  const inputsRef = useRef([]);
  const pinLength = 6;
  const pinCode = useRef(Array(pinLength).fill(""));

  const handleInputChange = (index, e) => {
    const input = e.target;
    const value = input.value;

    if (!isNaN(value)) {
      if (value.length > 1) {
        input.value = value.slice(0, 1);
      }

      pinCode.current =
        pinCode.current.slice(0, index) +
        value +
        pinCode.current.slice(index + 1);

      if (index < pinLength - 1 && value !== "") {
        inputsRef.current[index + 1].focus();
      }

      if (onComplete) {
        onComplete(pinCode.current);
      }
    }
  };

  const handleBackspace = (index, e) => {
    if (index > 0 && e.key === "Backspace" && e.target.value === "") {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <PinInputContainer>
      {[...Array(pinLength)].map((_, index) => (
        <PinInputItem item key={index}>
          <StyledInput
            variant="outlined"
            inputRef={(el) => (inputsRef.current[index] = el)}
            onChange={(e) => handleInputChange(index, e)}
            onKeyDown={(e) => handleBackspace(index, e)}
            inputProps={{
              type: "number",
              inputMode: "numeric",
              pattern: "[0-9]*",
              maxLength: 1,
            }}
          />
        </PinInputItem>
      ))}
    </PinInputContainer>
  );
};

export default PinInput;
