import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userDetails, setUserDetails] = useState(
    localStorage.getItem("userDetails")
  );

  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  }

  async function userLoginWithCredentials(email, password) {
    try {
      const { data } = await axios.post(
        "https://farmers-grocery-v2.herokuapp.com/farmers/login",
        { email, password }
      );
      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userDetails", data.user);
        axios.defaults.headers.common["Authorization"] = data.token;
        setUserDetails(data.user);
        setToken(data.token);
      }
      return data;
    } catch (error) {
      return error;
    }
  }

  axios.interceptors.response.use(undefined, function (error) {
    if (error.response.status === 401) {
      logout();
    }
    return Promise.reject(error);
  });

  function logout() {
    localStorage.removeItem("userDetails");
    localStorage.removeItem("token");
    axios.defaults.headers.common["Authorization"] = null;
    setToken(null);
    setUserDetails(null);
  }

  return (
    <AuthContext.Provider
      value={{ token, userDetails, userLoginWithCredentials, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
