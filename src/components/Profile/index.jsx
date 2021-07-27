import React from "react";
import { User, Wallet } from "../Icons";
import "./profile.css";

function Profile() {
  return (
    <>
      <div className="profile-container shadow">
        <h2 className="fsz-3">
          <User />
          <span className="ml-2">Profile</span>
        </h2>
        <p className="c-base mt-2">
          This information is shared publicly, be careful!
        </p>
        <div className="profile-layout">
          <div className="d-flex">
            <label>
              <span>First Name</span>
              <input type="text" className="input" />
            </label>
            <label>
              <span>Last Name</span>
              <input type="text" className="input" />
            </label>
          </div>
          <label>
            <span>Email ID</span>
            <input type="text" className="input" />
          </label>
          <label>
            <span>Phone Number</span>
            <input type="text" className="input" />
          </label>
          <button className="btn-primary">Update Information</button>
        </div>
        <div className="divider"></div>
        <h2 className="fsz-3 mt-5" id="#wallet">
          <Wallet />
          <span className="ml-2">Wallet</span>
        </h2>
        <p className="c-base mt-2">
          we will update wallet balence on every order you receive!
        </p>
        <div className="d-flex ai-center h-10 jc-space-between">
          <div className="">
            <p className="fw-700 fsz-2">
              <span className="fsz-4 mr-2">₹</span>
              1000.00
            </p>
          </div>
          <button className="btn-primary">
            <span className="mr-2">₹</span>
            Withdraw
          </button>
        </div>
        <div className="divider"></div>
        <h2 className="fsz-3 mt-5" id="#wallet">
          <Wallet />
          <span className="ml-2">Certificates</span>
        </h2>
        <p className="c-base mt-2">
          Learn About
          <span className="mx-1">
            <a href="https://realfarmer-quiz.netlify.app/" target="blank">
              Agriculture
            </a>
          </span>
          and be a Real Farmer!
        </p>
      </div>
    </>
  );
}
export { Profile };
