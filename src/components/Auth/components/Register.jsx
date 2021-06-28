import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex-column h-80 jc-center ai-center">
      <h2 className="fsz-2 mb-4">Register</h2>
      <form className="flex-column mb-4">
        <input type="text" className="mb-4" placeholder="john doe" />
        <input type="email" className="mb-4" placeholder="john@doe.com" />
        <input type="password" className="mb-4" placeholder="******" />
        <button className="btn-primary">Submit</button>
      </form>
      <Link to="/">Login</Link>
    </div>
  );
}
export { Register };
