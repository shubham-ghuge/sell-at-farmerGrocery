import React, { useEffect } from "react";
import "./App.css";
import { Auth } from "../Auth";
import { Route, Routes, useNavigate } from "react-router";
import { Login, Register } from "../Auth/components/";
import { Error, PrivateRoute } from "./components";
import { Dashboard } from "../Dashboard";

function App() {
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
