import React from "react";
import "./auth.css";
import { Outlet } from "react-router";
function Auth() {
  return (
    <div className="auth">
      <Outlet />
    </div>
  );
}
export { Auth };
