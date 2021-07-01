import React from "react";
import "./auth.css";
import { Outlet } from "react-router";
function Auth() {
  return (
    <>
      <Outlet />
    </>
  );
}
export { Auth };
