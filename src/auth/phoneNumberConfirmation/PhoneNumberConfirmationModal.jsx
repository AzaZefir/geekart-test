import React, { useEffect, useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { CloseIcon } from "../../assets/headerIcons/HeaderIcons";
import PinInput from "../../components/ui/PinInput";
import ReusableButton from "../../components/ui/ReusableButton";
import { loginStyles } from "../login/Login";
import { AuthState } from "./../../context/AuthProvider";
import MobileScrollLines from "../../components/ui/MobileScrollLines";
import LogoViewUi from "../../components/ui/LogoViewUi";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createPinSchema } from "../../helper/PinValidation";
import AnimatedDots from "../../components/ui/Loader";

const PhoneNumberConfirmationModal = ({
  showSecondModal,
  setShowSecondModal,
  phoneNumber,
}) => {
  const [pinCode, setPinCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState("");
  const [validationSchema, setValidationSchema] = useState(
    createPinSchema(pinCode)
  );

  useEffect(() => {
    setValidationSchema(createPinSchema(pinCode));
  }, [pinCode]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit",
  });

  const { setOpen, setIsRegistered, setStepperVarification, setIsAuth } =
    AuthState();

  const handleClose = () => {
    setOpen(false);
    setIsRegistered(false);
  };

  const handlePinComplete = (pin) => {
    setPinCode(pin);
  };

  const onSubmit = (data) => {
    const pin = data.pin;
    if (pin === "777777") {
      setIsLoading(true);
      setTimeout(() => {
        setShowSecondModal(false);
        setStepperVarification(true);
        handleClose();
        setIsLoading(false);
      }, 2000);
    } else if (pin === "111111") {
      setIsLoading(true);
      setTimeout(() => {
        setShowSecondModal(false);
        handleClose();
        setIsLoading(false);
      }, 2000);
      setIsAuth(true);
    } else {
      setError("Введен неверный код");
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
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={loginStyles}>
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

        <PinInput
          onComplete={handlePinComplete}
          control={control}
          errors={errors}
          setPinCode={setPinCode}
          isError={isError}
        />
        {(errors.pin || isError !== "") && (
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
            {errors.pin?.message || isError}
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
          {isLoading ? <AnimatedDots /> : "Подтвердить"}
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
