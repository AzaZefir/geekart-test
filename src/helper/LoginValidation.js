import * as yup from "yup";

export const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("Это поле обязательное")
    .matches(
      /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
      "Номер телефона введен неверно"
    ),
});
