import React from "react";
import { User } from "../Icons";
import { CertificateInfo, WalletInfo } from "./components/";
import { useProfileContext } from "../../contexts/useProfileContext";
import { useAuthContext } from "../../contexts/useAuthContext";
import "./profile.css";

function Profile() {
  const { name = " ", email = "" } = useProfileContext();
  const userName = name.split(" ");
  const { logout } = useAuthContext();
  return (
    <>
      <div className="profile-container shadow">
        <h2 className="fsz-3">
          <span className="icon-title">
            <User />
          </span>
          <span className="ml-2">Profile</span>
        </h2>
        <p className="c-base mt-2">
          This information is shared publicly, be careful!
        </p>
        <div className="profile-layout">
          <div className="d-flex">
            <label>
              <span>First Name</span>
              <input
                type="text"
                className="input"
                value={userName[0]}
                readOnly
              />
            </label>
            <label>
              <span>Last Name</span>
              <input
                type="text"
                className="input"
                value={userName[1]}
                readOnly
              />
            </label>
          </div>
          <label>
            <span>Email ID</span>
            <input type="text" className="input" value={email} readOnly />
          </label>
          <button className="btn-primary" onClick={() => logout()}>
            Log Out
          </button>
        </div>
        <div className="divider"></div>
        <WalletInfo />
        <div className="divider"></div>
        <CertificateInfo />
      </div>
    </>
  );
}
export { Profile };
