import React from "react";
import { useAuthContext } from "../../../contexts/useAuthContext";
import { Correct, Avatar } from "../../Icons";

function UserInfo() {
  const currentHour = new Date().getHours();
  const { userDetails } = useAuthContext();

  return (
    <div className="user-info d-flex ai-center jc-start px-2 pb-5 mb-5 bgc-base-100">
      <Avatar size="fsz-5" color="primary" />
      <div className="flex-column ml-3">
        <h2>
          {`Good ${
            currentHour < 12
              ? "morning"
              : currentHour < 18
              ? "afternoon"
              : "evening"
          }`}
          , {userDetails}!
        </h2>
        <p className="d-flex c-secondary fw-500 ai-center">
          <span className="c-success mr-2 mt-1">
            <Correct />
          </span>
          Verified User
        </p>
      </div>
    </div>
  );
}
export { UserInfo };
