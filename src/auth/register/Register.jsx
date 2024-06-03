import React, { useState } from "react";
import { AuthState } from "../../context/AuthProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneNumberConfirmationModal from "../phoneNumberConfirmation/PhoneNumberConfirmationModal";
import RegisterModal from "./registerModal/RegisterModal";
import { registerSchema } from "./../../helper/RegisterValidation";
import RegisterModalWithSteps from "./registerModalWithSteps/RegisterModalWithSteps";

const Register = ({ isRegistered, openStepperVarification }) => {
  const { setIsRegistered, setStepperVarification } = AuthState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [kindOfSports, setKindOfSports] = useState([]);
  const [sportsmans, setSportsmans] = useState([]);
  const [sportOrganizations, setSportOrganizations] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  const [showSecondModal, setShowSecondModal] = useState(false);

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
    // Сохранение данных в localStorage
    localStorage.setItem("phoneNumber", data.phoneNumber);
    localStorage.setItem("kindOfSports", JSON.stringify(kindOfSports));
    localStorage.setItem("sportsmans", JSON.stringify(sportsmans));
    localStorage.setItem(
      "sportOrganizations",
      JSON.stringify(sportOrganizations)
    );
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setPhoneNumber(data.phoneNumber);
    setShowSecondModal(true);
  };

  const handleClose = () => {
    setIsRegistered(false);
  };

  return (
    <>
      {!showSecondModal && (
        <RegisterModal
          isRegistered={isRegistered}
          handleClose={handleClose}
          errors={errors}
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          control={control}
        />
      )}

      {showSecondModal && (
        <PhoneNumberConfirmationModal
          showSecondModal={showSecondModal}
          setShowSecondModal={setShowSecondModal}
          phoneNumber={phoneNumber}
        />
      )}

      <RegisterModalWithSteps
        openStepperVarification={openStepperVarification}
        setStepperVarification={setStepperVarification}
        setKindOfSports={setKindOfSports}
      />
    </>
  );
};

export default Register;
