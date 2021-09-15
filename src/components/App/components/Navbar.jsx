import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useAuthContext } from "../../../contexts/useAuthContext";
import {
  Apple,
  Avatar,
  Chart,
  Exit,
  Home,
  MenuIcon,
  Plus,
  Settings,
  Shop,
} from "../../Icons";
import "./navbar.css";
import { useDataContext } from "../../../contexts/useDataContext";

function Badge() {
  return (
    <span className="badge-rect-danger fw-700" style={{ fontSize: ".6rem" }}>
      coming soon
    </span>
  );
}

function Navbar() {
  const { logout } = useAuthContext();
  const { setToggleMenu, toggleMenu } = useDataContext();
  return (
    <>
      <header className="header">
        <div className="d-flex">
          <button
            className="btn-reset"
            onClick={() => setToggleMenu((curr) => !curr)}
          >
            <MenuIcon />
          </button>
        </div>
        <div className="d-flex ai-center">
          <Link
            to="/products/add"
            className="btn-primary mr-4 d-flex ai-center"
          >
            <Plus />
            <span className="d-sm-block d-none">Add Product</span>
          </Link>
          <Link to="/profile" className="mr-3">
            <Avatar color="base" size="fsz-4" />
          </Link>
        </div>
      </header>
      <nav className={`nav ${toggleMenu && "d-none hide"}`}>
        <Link className="nav-link" to="/dashboard">
          <img src={logo} className="logo" alt="logo" />
          <span className="fsz-1 fw-600 c-white">sell @ FG</span>
        </Link>
        <div className="flex-column ai-center">
          <NavLink className="nav-link" to="/dashboard">
            <Home />
            <span>home</span>
          </NavLink>
          <NavLink className="nav-link" to="/products">
            <Apple />
            <span>View products</span>
          </NavLink>
          <NavLink className="nav-link" to="/orders">
            <Shop />
            <span>view orders</span>
          </NavLink>
          <NavLink className="nav-link" to="/feature">
            <Chart />
            <span>analytics</span>
            <Badge />
          </NavLink>
          <NavLink className="nav-link" to="/profile">
            <Settings />
            <span>settings</span>
          </NavLink>
          <button onClick={() => logout()} className="nav-link btn-reset">
            <Exit />
            <span>log out</span>
          </button>
        </div>
      </nav>
    </>
  );
}
export { Navbar };
