import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { CloseIcon } from "../../../assets/headerIcons/HeaderIcons";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { loginStyles } from "../Login";
import ReusableButton from "../../../components/ui/ReusableButton";

const LoginModal = ({
  open,
  handleClose,
  handleSubmit,
  onSubmit,
  control,
  errors,
}) => {
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
        <Box
          component="figure"
          sx={{
            cursor: "pointer",
            margin: "0",
            position: "absolute",
            right: "10px",
            top: "10px",
          }}
          onClick={handleClose}
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
          Вход на платформу
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
            }}
          >
            Номер телефона
          </label>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field: { name, value, onChange, ref, onBlur } }) => (
              <PhoneInput
                value={value}
                onChange={(value, country, event, formattedValue) => {
                  onChange(formattedValue);
                }}
                onBlur={onBlur}
                name="phoneNumber"
                type="text"
                country={"ru"}
                enableAreaCodes={true}
                disableDropdown={true}
                onlyCountries={["ru"]}
                inputProps={{
                  id: "phoneInput",
                  autoComplete: "on",
                  name: "Номер телефона",
                  country: "ru",
                  required: false,
                  autoFocus: false,
                  name,
                  ref,
                }}
                containerStyle={{
                  marginBottom: errors.phoneNumber ? "4px" : "24px",
                }}
                inputStyle={{
                  height: "40px",
                  width: "100%",
                  background: "rgba(241, 243, 247, 1)",
                  border: "1px solid rgba(241, 243, 247, 1)",
                  fontSize: "14px",
                  paddingRight: "10px",
                  borderRadius: "10px",
                  color: "rgba(147, 149, 184, 1)",
                }}
              />
            )}
          />
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
          <Typography sx={{ mb: "16px", textAlign: "center" }}>
            Нет аккаунта?
          </Typography>
          <ReusableButton
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
            Зарегистрироваться
          </ReusableButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default LoginModal;
