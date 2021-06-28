import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function setupAuthHeaderRequest(token) {
  if (token) {
    return (axios.defaults.headers.common["Authorization"] = token);
  }
  delete axios.defaults.headers.common["authorization"];
}

function authExceptionHandler(logoutUser) {
  const UNAUTHORIZED = 401;
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === UNAUTHORIZED) {
        console.log("here");
        logoutUser();
      }
      return Promise.reject(error);
    }
  );
}

export default function AuthContextProvider({ children }) {
  const [isUserLogin, setUserLogin] = useState(false);

  function loginUser(token) {
    setupAuthHeaderRequest(token);
    setUserLogin(true);
  }

  useEffect(() => {
    const { isUserLoggedIn, token } =
      JSON.parse(localStorage.getItem("login")) || {};
    isUserLoggedIn && token && loginUser(token);
    authExceptionHandler(logout);
  }, []);

  async function userLoginWithCredentials(email, password) {
    try {
      const { data } = await axios.post(
        "https://farmers-grocery-v2.herokuapp.com/customers/login",
        { email, password }
      );
      if (data.success) {
        localStorage.setItem(
          "login",
          JSON.stringify({
            isUserLoggedIn: true,
            token: data.token,
            userDetails: data.user,
          })
        );
        setupAuthHeaderRequest(data.token);
        return true;
      }
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  function logout() {
    localStorage.removeItem("login");
    setUserLogin(false);
    setupAuthHeaderRequest(null);
  }

  return (
    <AuthContext.Provider
      value={{ isUserLogin, logout, userLoginWithCredentials }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
