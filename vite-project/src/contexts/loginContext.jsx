import { createContext, useContext, useState } from "react";

const loginContext = createContext({
  loginMode: "false",
  toggleLoginMode: () => {},
});

export default loginContext;

export function LoginContextProvider({ children }) {
  const [loginMode, setLoginMode] = useState("false");

  function toggleLoginMode() {
    setLoginMode(function (oldLoginMode) {
      if (oldLoginMode === "false") {
        return "true";
      } else {
        return "false";
      }
    });
  }

  const value = {
    loginMode,
    toggleLoginMode,
  };
  return (
    <loginContext.Provider value={value}>{children}</loginContext.Provider>
  );
}

export function useLoginModeContext() {
  return useContext(loginContext);
}
