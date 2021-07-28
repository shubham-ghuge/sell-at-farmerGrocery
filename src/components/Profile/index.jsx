import React from "react";
import { User } from "../Icons";
import { CertificateInfo, WalletInfo } from "./components/";
import { useProfileContext } from "../../contexts/useProfileContext";
import "./profile.css";

function Profile() {
  const { name, email } = useProfileContext();
  const userName = name.split(" ");
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
              <input type="text" className="input" value={userName[0]} />
            </label>
            <label>
              <span>Last Name</span>
              <input type="text" className="input" value={userName[1]} />
            </label>
          </div>
          <label>
            <span>Email ID</span>
            <input type="text" className="input" value={email} />
          </label>
          <label>
            <span>Phone Number</span>
            <input type="text" className="input" />
          </label>
          <button className="btn-primary">Update Information</button>
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
