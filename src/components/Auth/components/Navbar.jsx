import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../favicon.svg";

function Navbar() {
  return (
    <>
      <header className="bgc-primary-300 h-10 navbar jc-space-between">
        <Link to="/" className="logo">
          <img src={logo} alt="sell at farmers Grocery" />
          <span className="d-none d-sm-block">sell at farmers grocery</span>
        </Link>
        <div>
          <Link to="/" className="btn-outline-primary bgc-base-100 mx-2">
            Log In
          </Link>
          <Link to="/register" className="btn-primary">
            Start Selling
          </Link>
        </div>
      </header>
      <h2 className="d-flex mt-7 jc-center ai-center title">
        Begin your selling journey on
        <span className="bgc-success-100 bdrs-1">Farmers Grocery</span>
      </h2>
    </>
  );
}
export { Navbar };
