import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    const auth = localStorage.getItem("isAuth");
    return auth ? JSON.parse(auth) : false;
  });
  const [open, setOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [openStepperVarification, setStepperVarification] = useState(false);

  useEffect(() => {
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
  }, [isAuth]);
  
  return (
    <AuthContext.Provider
      value={{
        open,
        setOpen,
        isRegistered,
        setIsRegistered,
        openStepperVarification,
        setStepperVarification,
        isAuth,
        setIsAuth,
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
