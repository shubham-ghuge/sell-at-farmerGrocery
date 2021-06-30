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
      <div className="text-center title">
        <h2 className="mt-7">
          Begin your <span>selling journey</span> on
        </h2>
        <h3 className="bgc-success-100 d-ib mt-3 mb-5 p-2 bdrs-1">
          Farmers Grocery
        </h3>
      </div>
    </>
  );
}
export { Navbar };
