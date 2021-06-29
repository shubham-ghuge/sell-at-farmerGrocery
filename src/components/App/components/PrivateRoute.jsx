import React from "react";
import { Navigate, Route } from "react-router";
import { useAuthContext } from "../../../contexts/useAuthContext";

function PrivateRoute({ path, ...props }) {
  const { userDetails } = useAuthContext();
  return userDetails ? <Route path={path} {...props} /> : <Navigate to="/" />;
}
export { PrivateRoute };
