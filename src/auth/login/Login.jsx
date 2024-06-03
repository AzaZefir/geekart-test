import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import "react-phone-input-2/lib/material.css";
import { schema } from "./../../helper/LoginValidation";
import LoginModal from "./loginModal/LoginModal";
import PhoneNumberConfirmationModal from "../phoneNumberConfirmation/PhoneNumberConfirmationModal";

const Login = ({ open }) => {
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    console.log(data);
    setPhoneNumber(data.phoneNumber);
    setShowSecondModal(true);
  };

  return (
    <React.Fragment>
      {!showSecondModal && (
        <LoginModal
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          control={control}
          errors={errors}
          open={open}
        />
      )}

      {showSecondModal && (
        <PhoneNumberConfirmationModal
          showSecondModal={showSecondModal}
          setShowSecondModal={setShowSecondModal}
          phoneNumber={phoneNumber}
        />
      )}
    </React.Fragment>
  );
};

export default Login;
