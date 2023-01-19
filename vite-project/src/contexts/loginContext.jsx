import { createContext, useContext, useState } from "react";


const loginContext = createContext({
  loginMode: "false",
  inicioSesion: () => {},
});


export default loginContext;

export function LoginContextProvider({ children }) {
  const [loginMode, setLoginMode] = useState("Iniciar sesion");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
   function inicioSesion(e) {
    e.preventDefault();
    const response =  fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (response.status === 200) {
      const token =  response.json();
      setLoginMode(token.jwt);
      
      console.log(token)
      setUser({
        email: "",
        password: "",
      });
      
    } else {
      alert("Email o password incorrectos");
    }
  }
 

  // function toggleLoginMode(token) {
  //   if(token === ""){
  //     setLoginMode("iniciar sesion")
  //   }else{setLoginMode("cerrar sesion")}
  //   setLoginMode(token);
  //   console.log(token)
  //   console.log(loginMode)

  // }

 

  const value = {
    loginMode,
    inicioSesion,
  };

  
  return (
    <loginContext.Provider value={value}>{children}</loginContext.Provider>
  );
}

export function useLoginModeContext() {
  return useContext(loginContext);
}


