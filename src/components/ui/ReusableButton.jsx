import React from "react";
import { Button } from "@mui/material";

const ReusableButton = ({
  children,
  buttonStyles = {},
  onClick,
  ...props
}) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "-0.5px",
        fontWeight: "500",
        backgroundColor: "#1976d2",
        width: "100%",
        height: "40px",
        padding: "10px 24px 10px 24px",
        borderRadius: "10px",
        textTransform: "none",
        ...buttonStyles,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ReusableButton;
