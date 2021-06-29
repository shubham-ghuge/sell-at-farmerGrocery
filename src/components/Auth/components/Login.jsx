import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../../Alert";
import { useAuthContext } from "../../../contexts/useAuthContext";

function Login() {
  let navigate = useNavigate();
  const { userLoginWithCredentials, userDetails } = useAuthContext();
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    userDetails && navigate("/dashboard");
  }, []);

  async function userLogin(event) {
    event.preventDefault();
    setLoading(true);
    const data = await userLoginWithCredentials(
      inputData.email,
      inputData.password
    );
    setLoading(false);
    console.log(data);
    if (data.success === true) {
      return navigate("/dashboard");
    }
  }

  return (
    <div className="flex-column h-80 jc-center ai-center">
      {error && <Alert message={error} onClose={() => setError(null)} />}
      <h2 className="fsz-2 mb-4">login</h2>
      <form className="flex-column mb-4" onSubmit={(e) => userLogin(e)}>
        <input
          // type="email"
          value={inputData.email}
          onChange={(e) =>
            setInputData((curr) => {
              return { ...curr, email: e.target.value };
            })
          }
          className="mb-4"
          required
        />
        <input
          type="password"
          value={inputData.password}
          onChange={(e) =>
            setInputData((curr) => {
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
