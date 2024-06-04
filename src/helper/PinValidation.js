import * as yup from "yup";

export const createPinSchema = (pinCode) => {
  return yup.object().shape({
    pin: yup
      .string()
      .required("Это поле обязательное")
      .length(6, "Введен неверный код")
      .matches(new RegExp(`^${pinCode}$`), "Введен неверный код"),
  });
};
