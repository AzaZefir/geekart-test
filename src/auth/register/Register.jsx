import React, { useState } from "react";
import { AuthState } from "../../context/AuthProvider";

import PhoneNumberConfirmationModal from "../phoneNumberConfirmation/PhoneNumberConfirmationModal";
import RegisterModal from "./registerModal/RegisterModal";
import RegisterModalWithSteps from "./registerModalWithSteps/RegisterModalWithSteps";

const Register = ({ isRegistered, openStepperVarification }) => {
  const { setIsRegistered, setStepperVarification } = AuthState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [kindOfSports, setKindOfSports] = useState([]);
  const [sportsmans, setSportsmans] = useState([]);
  const [sportOrganizations, setSportOrganizations] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleClose = () => {
    setIsRegistered(false);
  };

  return (
    <>
      {!showSecondModal && (
        <RegisterModal
          isRegistered={isRegistered}
          handleClose={handleClose}
          setPhoneNumber={setPhoneNumber}
          setShowSecondModal={setShowSecondModal}
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
