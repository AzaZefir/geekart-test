import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { CloseIcon } from "../../assets/headerIcons/HeaderIcons";
import PinInput from "../../components/ui/PinInput";
import ReusableButton from "../../components/ui/ReusableButton";
import { loginStyles } from "../login/Login";
import { AuthState } from "./../../context/AuthProvider";
import MobileScrollLines from "../../components/ui/MobileScrollLines";

const PhoneNumberConfirmationModal = ({
  showSecondModal,
  setShowSecondModal,
  phoneNumber,
}) => {
  const { setOpen, setIsRegistered, setStepperVarification } = AuthState();
  const [pinCode, setPinCode] = useState("");
  const handleClose = () => {
    setOpen(false);
    setIsRegistered(false);
  };

  const handlePinComplete = (pin) => {
    setPinCode(pin);
  };

  const handleConfirmClick = () => {
    if (pinCode === "777777") {
      setShowSecondModal(false);
      setStepperVarification(true);
      handleClose();
    } else if (pinCode === "111111") {
      setShowSecondModal(false);
      handleClose();
    } else {
      alert("Incorrect PIN. Please try again.");
    }
  };

  return (
    <Modal
      open={showSecondModal}
      onClose={() => {
        setShowSecondModal(false);
        handleClose();
      }}
      aria-labelledby="modal-second-modal-title"
      aria-describedby="modal-second-modal-description"
      sx={{
        backdropFilter: "blur(2px)",
      }}
    >
      <Box sx={loginStyles}>
        <MobileScrollLines bottom="12px" />
        <Box
          component="figure"
          sx={{
            cursor: "pointer",
            margin: "0",
            position: "absolute",
            right: "16px",
            top: "16px",
          }}
          onClick={() => {
            setShowSecondModal(false);
            handleClose();
          }}
        >
          <CloseIcon />
        </Box>
        <Box
          component="figure"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: "24px",
            mt: "0",
          }}
        >
          <img src="/logoSmall.png" alt="logo" />
        </Box>
        <Typography
          id="modal-modal-title"
          variant="h1"
          component="h2"
          sx={{
            textAlign: "center",
            fontSize: "30px",
            lineHeight: "32px",
            letterSpacing: "-1%",
          }}
        >
          Подтвердите номер телефона
        </Typography>
        <Typography
          id="modal-modal-description"
          component="p"
          sx={{
            mt: "16px",
            mb: "32px",
            textAlign: "center",
            fontSize: "12px",
            lineHeight: "18px",
            letterSpacing: "-0.1px",
            fontWeight: "600",
            color: "rgba(147, 149, 184, 1)",
            padding: "0 20px",
          }}
        >
          Отправим сообщение с 6-ти значным кодом на номер {phoneNumber}{" "}
          <Typography
            component="span"
            variant="p"
            sx={{ color: "rgba(53, 55, 84, 1)", cursor: "pointer" }}
          >
            Изменить
          </Typography>
        </Typography>

        <PinInput onComplete={handlePinComplete} />

        <ReusableButton
          variant="text"
          type="button"
          onClick={handleConfirmClick}
          buttonStyles={{
            backgroundColor: "rgba(6, 8, 44, 1)",
            color: "rgba(255, 255, 255, 1)",
            "&:hover": {
              backgroundColor: "rgba(241, 243, 247, 1)",
              color: "rgba(6, 8, 44, 1)",
            },
          }}
        >
          Подтвердить
        </ReusableButton>

        <Typography
          variant="h6"
          component="p"
          sx={{ textAlign: "center", mt: "24px" }}
        >
          Отправить снова через 01:00
        </Typography>
      </Box>
    </Modal>
  );
};

export default PhoneNumberConfirmationModal;
