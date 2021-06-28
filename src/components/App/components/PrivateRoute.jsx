import React from "react";
import { Navigate, Route } from "react-router";
import { useAuthContext } from "../../Auth/useAuthContext";

function PrivateRoute({ path, ...props }) {
  const { isUserLogin } = useAuthContext();
  console.log({ isUserLogin });
  return isUserLogin ? <Route path={path} {...props} /> : <Navigate to="/" />;
}
export { PrivateRoute };
