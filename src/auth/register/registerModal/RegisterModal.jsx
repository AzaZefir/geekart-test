import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import { loginStyles } from "../../login/Login";
import { CloseIcon } from "../../../assets/headerIcons/HeaderIcons";
import PhoneInputController from "../../login/loginModal/phoneInputController/PhoneInputController";
import ReusableButton from "../../../components/ui/ReusableButton";
import { AuthState } from "../../../context/AuthProvider";
import MobileScrollLines from "../../../components/ui/MobileScrollLines";
import CloseBtnUi from "../../../components/ui/CloseBtnUi";
import LogoViewUi from "../../../components/ui/LogoViewUi";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../helper/RegisterValidation";

const RegisterModal = ({
  isRegistered,
  handleClose,
  setPhoneNumber,
  setShowSecondModal
}) => {
  const { setIsRegistered, setOpen } = AuthState();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("phoneNumber", data.phoneNumber);
    setPhoneNumber(data.phoneNumber);
    setShowSecondModal(true);
  };

  const onOpenLogin = () => {
    setOpen(true);
    setIsRegistered(false);
  };
  
  return (
    <Modal
      open={isRegistered}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        backdropFilter: "blur(2px)",
      }}
    >
      <Box sx={loginStyles}>
        <MobileScrollLines bottom="70px" />
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
            letterSpacing: "-1%",
          }}
        >
          Регистрация
        </Typography>

        <Typography
          id="modal-modal-description"
          component="p"
          sx={{
            mt: "16px",
            mb: "32px",
            textAlign: "center",
            fontSize: "14px",
            lineHeight: "18px",
            letterSpacing: "-0.7px",
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
              fontSize: "12px",
              color: "rgba(147, 149, 184, 1)",
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
          <Typography
            sx={{
              mt: "16px",
              textAlign: "center",
              fontSize: "12px",
              lineHeight: "18px",
              letterSpacing: "-0.1px",
              fontWeight: "600",
              color: "rgba(147, 149, 184, 1)",
            }}
          >
            Регистрируясь, вы соглашаетесь{" "}
            <Typography
              component="span"
              variant="p"
              sx={{ color: "rgba(53, 55, 84, 1)", cursor: "pointer" }}
            >
              правилами использования
            </Typography>{" "}
            и
            <Typography
              component="span"
              variant="p"
              sx={{ color: "rgba(53, 55, 84, 1)", cursor: "pointer" }}
            >
              {" "}
              политикой конфиденциальности
            </Typography>
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{ mb: "16px", textAlign: "center" }}
            variant="h6"
            component="p"
          >
            Уже зарегистированы?
          </Typography>
          <ReusableButton
            onClick={onOpenLogin}
            variant="text"
            buttonStyles={{
              backgroundColor: "rgba(241, 243, 247, 1)",
              color: "rgba(6, 8, 44, 1)",
              "&:hover": {
                backgroundColor: "rgba(6, 8, 44, 1)",
                color: "rgba(255, 255, 255, 1)",
              },
            }}
          >
            Войти
          </ReusableButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default RegisterModal;
