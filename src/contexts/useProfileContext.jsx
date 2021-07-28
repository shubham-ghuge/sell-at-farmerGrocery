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
    certificates: [],
  });
  async function getUserData() {
    try {
      const { data } = await axios.get(
        "https://farmers-grocery-v2.herokuapp.com/farmers/profile"
      );
      setUserData(data.response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    token && getUserData();
  }, []);

  return (
    <profileContext.Provider
      value={{
        name: userData.name,
        email: userData.email,
        certificates: [
          "https://realfarmer-quiz.netlify.app/certificate/your_email_id",
          "https://realfarmer-quiz.netlify.app/certificate/your_email_id",
        ],
        walletBalence: userData.wallet,
      }}
    >
      {children}
    </profileContext.Provider>
  );
}
export const useProfileContext = () => useContext(profileContext);
