import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

function Error() {
  return (
    <>
      <div className="h-90 flex-column jc-center ai-center">
        <img src={logo} alt="logo" className="h-20 shadow" style={{borderRadius:"50%"}} />
        <div className="d-flex ai-center">
          <p className="fsz-5 c-primary fw-600 mr-3">404</p>
          <h3 className="fsz-4 fw-700 my-4">Page Not Found</h3>
        </div>
        <p className="c-base fw-400">
          Please check the url in the address bar and try again
        </p>
        <div className="d-flex mt-4">
          <Link className="btn-primary" to="/">
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
}
export { Error };
