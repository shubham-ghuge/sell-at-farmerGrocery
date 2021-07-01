import React from "react";
import { Link, NavLink } from "react-router-dom";
import userImage from "../../../assets/photo1.png";
import logo from "../../../favicon.svg";
import { Chart, Home, Plus, Search, Settings, Shop, Wallet } from "../../Icons";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <header className="header">
        <button className="btn-reset d-flex ai-center c-secondary">
          <Search />
          <span>Search</span>
        </button>
        <div className="d-flex ai-center">
          <button className="btn-primary mr-4 d-flex ai-center">
            <Plus />
            <span className="d-sm-block d-none">Add Product</span>
          </button>
          <span className="avatar-lg mr-2">
            <span className="badge-primary"></span>
            <img src={userImage} alt="user avatar" />
          </span>
        </div>
      </header>
      <nav className="nav">
        <Link to="/dashboard">
          <img src={logo} className="logo" alt="logo" />
          <span className="fsz-1 fw-500 c-white">sell @ FG</span>
        </Link>
        <div className="flex-column ai-center">
          <NavLink to="/dashboard">
            <Home />
            <span>home</span>
          </NavLink>
          <NavLink to="/products">
            <Plus />
            <span>add product</span>
          </NavLink>
          <NavLink to="/orders">
            <Shop />
            <span>view orders</span>
          </NavLink>
          <NavLink to="/feature">
            <Chart />
            <span>analytics</span>
          </NavLink>
          <NavLink to="/feature">
            <Wallet />
            <span>wallet</span>
          </NavLink>
          <NavLink to="/feature">
            <Settings />
            <span>settings</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
}
export { Navbar };
