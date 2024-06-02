import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { CloseIcon } from "../../../../assets/headerIcons/HeaderIcons";
import PinInput from "../../../ui/PinInput";
import ReusableButton from "../../../ui/ReusableButton";
import { loginStyles } from "../login/Login";

const PhoneNumberConfirmationModal = ({
  showSecondModal,
  setShowSecondModal,
  handleClose,
  phoneNumber
}) => {
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
        <Box
          component="figure"
          sx={{
            cursor: "pointer",
            margin: "0",
            position: "absolute",
            right: "10px",
            top: "10px",
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
            letterSpacing: "-0.1",
            fontWeight: "600",
            color: "rgba(147, 149, 184, 1)",
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

        <PinInput />

        <ReusableButton
          variant="text"
          type="submit"
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
