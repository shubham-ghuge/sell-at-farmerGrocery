import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";

const profileContext = createContext();

export default function ProfileContextProvide({ children }) {
  const { token } = useAuthContext();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    wallet: 0,
  });
  const [certificates, setCertificates] = useState([]);
  async function getUserData() {
    try {
      const { data } = await axios.get(
        "https://farmers-grocery-v2.herokuapp.com/farmers/profile"
      );
      setUserData(data.response);
      setCertificates(data.response.certificates);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    token && getUserData();
  }, [token]);

  return (
    <profileContext.Provider
      value={{
        name: userData.name,
        email: userData.email,
        certificates,
        walletBalence: userData.wallet,
        setCertificates,
      }}
    >
      {children}
    </profileContext.Provider>
  );
}
export const useProfileContext = () => useContext(profileContext);
