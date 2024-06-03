import * as yup from "yup";

export const registerSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("Этот номер телефона уже зарегистрирован")
    .matches(
      /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
      "Номер телефона введен неверно"
    )
    .test(
      "phone-exists",
      "Этот номер телефона уже зарегистрирован",
      (value) => {
        const existingPhoneNumber = localStorage.getItem("phoneNumber");
        return !existingPhoneNumber || existingPhoneNumber !== value;
      }
    ),
});
