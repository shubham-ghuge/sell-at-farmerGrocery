import React, { useEffect } from "react";
import "./App.css";
import { Auth } from "../Auth";
import { Route, Routes } from "react-router";
import { Login, Register } from "../Auth/components/";
import { Error, PrivateRoute } from "./components";
import { Dashboard } from "../Dashboard";
import { useAuthContext } from "../Auth/useAuthContext";

function App() {
  const { setToken } = useAuthContext();
  useEffect(() => {
    const { isUserLoggedIn, token } = JSON.parse(
      localStorage.getItem("login")
    ) || {
      isUserLoggedIn: false,
    };
    if (isUserLoggedIn) {
      setToken(() => token);
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Auth />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<Error />} />
        <PrivateRoute path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Auth />
    </div>
  );
}

export default App;
