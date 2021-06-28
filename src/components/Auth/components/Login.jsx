import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../../Alert";
import { useAuthContext } from "../useAuthContext";
function Login() {
  let navigate = useNavigate();
  const { token, setToken } = useAuthContext();
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  async function userLogin(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://farmers-grocery-v2.herokuapp.com/customers/login",
        {
          email: userDetails.email,
          password: userDetails.password,
        }
      );
      if (data.success && "token" in data) {
        console.log(token);
        setToken(() => data.token);
        localStorage.setItem(
          "login",
          JSON.stringify({
            isUserLoggedIn: true,
            token: data.token,
            userDetails: data.user,
          })
        );
        return navigate("/dashboard");
      } else {
        setError(data.message);
      }
    } catch (error) {
      const { message } = error.response.data;
      setError(message);
      throw error;
    } finally {
      return setLoading(false);
    }
  }

  return (
    <div className="flex-column h-80 jc-center ai-center">
      {error && <Alert message={error} onClose={() => setError(null)} />}
      <h2 className="fsz-2 mb-4">login</h2>
      <form className="flex-column mb-4" onSubmit={(e) => userLogin(e)}>
        <input
          // type="email"
          value={userDetails.email}
          onChange={(e) =>
            setUserDetails((curr) => {
              return { ...curr, email: e.target.value };
            })
          }
          className="mb-4"
          required
        />
        <input
          type="password"
          value={userDetails.password}
          onChange={(e) =>
            setUserDetails((curr) => {
              return { ...curr, password: e.target.value };
            })
          }
          className="mb-4"
          required
        />
        <button className="btn-primary">
          {loading ? "loading..." : "Submit"}
        </button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
}
export { Login };
