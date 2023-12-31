import { Link } from "react-router-dom";
import { login } from "../utils/API";
import { useState } from "react";
import Auth from "../utils/auth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    try {
      const response = await login(user);
      if (response.ok) {
        console.log("success");
        const { user, token } = await response.json();
        Auth.login(token);
        console.log(user);
      } else {
        console.log("there was an error login in!");
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="container mb-5">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div id="login" className="card signup-form">
              <div className="card-header">Log In</div>
              <div className="card-body">
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      id="username"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Log In
                  </button>
                </form>
                <p className="mt-3">
                  Don't have an account? <Link to="/signup">Sign up here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
