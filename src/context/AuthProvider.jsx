import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [openStepperVarification, setStepperVarification] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        open,
        setOpen,
        isRegistered,
        setIsRegistered,
        openStepperVarification,
        setStepperVarification,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthState = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
