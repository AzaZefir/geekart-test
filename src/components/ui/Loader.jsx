import React from "react";
import { Box } from "@mui/material";
import { styled, keyframes } from "@mui/system";

const darkenAnimation = keyframes`
  0% {
    background-color: rgba(255, 255, 255, 1);
  }
  100% {
    background-color: rgba(0, 0, 0, 1);
  }
`;

const AnimatedDot = styled(Box)(({ theme }) => ({
  width: "5px",
  height: "5px",
  borderRadius: "50%",
  margin: "0 4px",
  animation: `${darkenAnimation} 2s infinite ease-in-out`,
}));

const AnimatedDotWithDelay = styled(AnimatedDot)(({ theme }) => ({
  animationDelay: "0.1s",
}));

const AnimatedDots = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <AnimatedDot />
      <AnimatedDotWithDelay />
      <AnimatedDotWithDelay sx={{ animationDelay: "0.2s" }} />
      <AnimatedDotWithDelay sx={{ animationDelay: "0.3s" }} />
    </Box>
  );
};

export default AnimatedDots;
