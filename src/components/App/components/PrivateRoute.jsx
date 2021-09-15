import React from "react";
import { Navigate, Route } from "react-router";
import { useAuthContext } from "../../../contexts/useAuthContext";
import { Navbar } from "./Navbar";

function PrivateRoute({ path, ...props }) {
  const { userDetails } = useAuthContext();
  return userDetails ? (
    <div className="main">
      <Navbar />
      <div className="container">
        <Route path={path} {...props} />
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
}
export { PrivateRoute };
