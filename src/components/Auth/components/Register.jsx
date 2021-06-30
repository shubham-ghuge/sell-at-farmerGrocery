import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "../../Alert";
import { Email, Hide, Key, Loader, Show, User } from "../../Icons";
import { Navbar } from "./Navbar";

function Register() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessMessage, setSuccessMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [inputDetails, setInputDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  async function registerUser(event) {
    event.preventDefault();
    if (
      inputDetails.name.length >= 2 &&
      inputDetails.password.length >= 6 &&
      inputDetails.password === inputDetails.confirmPassword
    ) {
      try {
        setLoading(true);
        const { data } = await axios.post(
          "https://farmers-grocery-v2.herokuapp.com/farmers/register",
          {
            name: inputDetails.name,
            email: inputDetails.email,
            password: inputDetails.password,
          }
        );
        if (data.success) {
          setSuccessMessage(true);
          setMessage(data.message);
        } else {
          setMessage(data.message);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setShowAlert(true);
      }
    }
  }

  return (
    <>
      {showAlert && (
        <Alert
          message={message}
          onClose={() => setShowAlert(false)}
          color={showSuccessMessage ? "success" : "danger"}
        />
      )}
      <Navbar />
      <div className="flex-column form jc-center ai-center">
        <h2 className="fsz-2 my-7">Sign Up to your account</h2>
        <form className="flex-column mb-4" onSubmit={(e) => registerUser(e)}>
          <div className="icon-input">
            <User />
            <input
              type="text"
              placeholder="john doe"
              value={inputDetails.name}
              onChange={(e) =>
                setInputDetails((curr) => ({ ...curr, name: e.target.value }))
              }
              required
            />
          </div>
          <p className="mb-3 mt-1 c-danger text-sm fw-500">
            {inputDetails.name.length !== 0 &&
              inputDetails.name.length < 2 &&
              "Name must be atleast 2 characters"}
          </p>
          <div className="icon-input mb-4">
            <Email />
            <input
              type="email"
              placeholder="johndoe@google.co"
              value={inputDetails.email}
              onChange={(e) =>
                setInputDetails((curr) => ({ ...curr, email: e.target.value }))
              }
              required
            />
          </div>
          <div className="icon-input">
            <Key />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={inputDetails.password}
              onChange={(e) =>
                setInputDetails((curr) => ({
                  ...curr,
                  password: e.target.value,
                }))
              }
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((curr) => !curr)}
            >
              {showPassword ? <Show /> : <Hide />}
            </button>
          </div>
          <p className="mb-3 mt-1 c-danger text-sm fw-500">
            {inputDetails.password.length !== 0 &&
              inputDetails.password.length < 6 &&
              "Password must be at least 6 characters"}
          </p>
          <div className="icon-input">
            <Key />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter confirm password"
              value={inputDetails.confirmPassword}
              onChange={(e) =>
                setInputDetails((curr) => ({
                  ...curr,
                  confirmPassword: e.target.value,
                }))
              }
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((curr) => !curr)}
            >
              {showConfirmPassword ? <Show /> : <Hide />}
            </button>
          </div>
          <p className="mb-3 mt-1 c-danger text-sm fw-500">
            {inputDetails.confirmPassword.length !== 0 &&
              inputDetails.password !== inputDetails.confirmPassword &&
              "Passwords Does not match"}
          </p>
          <p className="my-2"></p>
          <button className="btn-primary d-flex jc-center">
            {loading ? "Signing in" : "Sign Up"}
            {loading && <Loader />}
          </button>
        </form>
        <p>
          Already Have an account?{" "}
          <span>
            <Link to="/">Sign in</Link>
          </span>
        </p>
      </div>
    </>
  );
}
export { Register };
