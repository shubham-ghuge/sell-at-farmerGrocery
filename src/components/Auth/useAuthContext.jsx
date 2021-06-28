import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState("");
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
