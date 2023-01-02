import React from "react";

export const ToastifyContext = React.createContext();

const ToastifyComponent = ({ children }) => {
  const [ToastifyState, setToastifyState] = React.useState({
    open: false,
    message: "",
    variant: "info",
  });

  return (
    <ToastifyContext.Provider value={[ToastifyState, setToastifyState]}>
      {children}
    </ToastifyContext.Provider>
  );
};

export default ToastifyComponent;
