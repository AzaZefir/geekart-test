import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import { loginStyles } from "../Login";
import ReusableButton from "../../../components/ui/ReusableButton";
import PhoneInputController from "./phoneInputController/PhoneInputController";
import { AuthState } from "../../../context/AuthProvider";
import MobileScrollLines from "../../../components/ui/MobileScrollLines";
import CloseBtnUi from "../../../components/ui/CloseBtnUi";
import LogoViewUi from "../../../components/ui/LogoViewUi";

const LoginModal = ({ handleSubmit, onSubmit, control, errors, open }) => {
  const { setOpen, setIsRegistered } = AuthState();
  const handleClose = () => setOpen(false);

  const handleOpenRegisterModal = () => {
    setOpen(false);
    setIsRegistered(true);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        backdropFilter: "blur(2px)",
      }}
    >
      <Box sx={loginStyles}>
        <MobileScrollLines bottom="47px" />
        <CloseBtnUi onClick={handleClose} />

        <LogoViewUi />

        <Typography
          id="modal-modal-title"
          variant="h1"
          component="h2"
          sx={{
            textAlign: "center",
            fontSize: "30px",
            lineHeight: "32px",
            letterSpacing: "-0.4px",
          }}
        >
          Вход на платформу
        </Typography>

        <Typography
          id="modal-modal-description"
          component="p"
          sx={{
            mt: "19px",
            mb: "32px",
            textAlign: "center",
            fontSize: "14px",
            lineHeight: "18px",
            letterSpacing: "-0.59px",
            fontWeight: "600",
            color: "rgba(147, 149, 184, 1)",
          }}
        >
          Код будет автоматически отправлен на Ваш номер телефона с помощью SMS
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mb: "40px", width: "100%" }}
        >
          <label
            htmlFor="phoneInput"
            style={{
              marginBottom: "5px",
              fontWeight: "400",
              lineHeight: "18px",
              color: "rgba(147, 149, 184, 1)",
              fontSize: "12px",
            }}
          >
            Номер телефона
          </label>
          <PhoneInputController control={control} errors={errors} />
          {errors.phoneNumber && (
            <Typography
              color="error"
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "18px",
                textAlign: "left",
                mb: "24px",
              }}
            >
              {errors.phoneNumber.message}
            </Typography>
          )}

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
            Получить код
          </ReusableButton>
        </Box>

        <Box>
          <Typography
            sx={{ mb: "16px", textAlign: "center" }}
            variant="h6"
            component="p"
          >
            Нет аккаунта?
          </Typography>
          <ReusableButton
            variant="text"
            onClick={handleOpenRegisterModal}
            buttonStyles={{
              backgroundColor: "rgba(241, 243, 247, 1)",
              color: "rgba(6, 8, 44, 1)",
              "&:hover": {
                backgroundColor: "rgba(6, 8, 44, 1)",
                color: "rgba(255, 255, 255, 1)",
              },
            }}
          >
            Зарегистрироваться
          </ReusableButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default LoginModal;
