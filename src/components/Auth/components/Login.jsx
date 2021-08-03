import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../../Alert";
import { Navbar } from "./Navbar";
import { useAuthContext } from "../../../contexts/useAuthContext";
import { Email, Hide, Key, Loader, Show } from "../../Icons";
import { Footer } from "../../Footer";

function Login() {
  let navigate = useNavigate();
  const { userLoginWithCredentials, userDetails } = useAuthContext();
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (userDetails) {
      return navigate("/dashboard", { replace: true });
    }
  }, [userDetails]);

  async function userLogin(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const data = await userLoginWithCredentials(
        inputData.email,
        inputData.password
      );
      if (data.success === true) {
        return navigate("/dashboard");
      }
      setError(data.response.data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      {error && <Alert message={error} onClose={() => setError(null)} />}
      <div className="flex-column form jc-center ai-center">
        <h2 className="fsz-2 mt-7">Sign in to your account</h2>
        <form className="flex-column mt-7 mb-4" onSubmit={(e) => userLogin(e)}>
          <div className="icon-input mb-4">
            <Email />
            <input
              type="email"
              value={inputData.email}
              onChange={(e) =>
                setInputData((curr) => {
                  return { ...curr, email: e.target.value };
                })
              }
              placeholder="Enter Your Email Id"
              required
            />
          </div>
          <div className="icon-input mb-4">
            <Key />
            <input
              type={show ? "text" : "password"}
              value={inputData.password}
              onChange={(e) =>
                setInputData((curr) => {
                  return { ...curr, password: e.target.value };
                })
              }
              placeholder="Enter Password"
              required
            />
            <button type="button" onClick={() => setShow((curr) => !curr)}>
              {show ? <Show /> : <Hide />}
            </button>
          </div>
          <button className="btn-primary mt-3 d-flex jc-center">
            {loading ? "Logging In" : "Log In"}
            {loading && <Loader />}
          </button>
          <button
            className="btn-c-primary mt-4"
            onClick={() => {
              setInputData((curr) => ({
                email: "shubhamghuge@gmail.com",
                password: "aaaaaa",
              }));
            }}
          >
            Demo login credentials
          </button>
        </form>
        <p>
          New Here?
          <span>
            <Link to="/register"> Create an account.</Link>
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
}
export { Login };
