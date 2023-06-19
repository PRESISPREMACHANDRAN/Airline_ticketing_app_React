
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import LoginHeader from "../Header/LoginHeader";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const loginStyle = {
    color: "blueViolet",
  };

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const resetForm = () => {
    setUsername("");
    setPassword("");
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Check login credentials
    if (username === "admin" && password === "admin@123") {
      // Redirect to admin page
      navigate("/addFlight");
    } else if (username === "user" && password === "user@123") {
      // Redirect to user page
      navigate("/ticketDetails");
    } else {
      // Show error message
      setError("Invalid username or password");
      resetForm(); // Reset the form
    }
  };

  return (
    <>
      <LoginHeader />
      <div className="containerLogin">
        <div className="row">
          <div className="col col-12 col-sm-12 col md-6 col-lg-6 col-xl-6 col-xxl-6">
            <form onSubmit={handleLogin}>
              <div className="form-group row">
                <h1>User Login | Admin Login</h1>
              </div>
              <br />

              <div className="form-group row">
                <label
                  htmlFor="inputUserName"
                  className="col-sm-2 col-form-label"
                  style={loginStyle}
                >
                  Username:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputUserName"
                    placeholder="Enter Username..."
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setError(""); // Clear error message
                    }}
                  />
                </div>
              </div>
              <br />
              <div className="form-group row">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-2 col-form-label"
                  style={loginStyle}
                >
                  Password:
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Enter Password..."
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError(""); // Clear error message
                    }}
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-10">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    id="buttonLogin"
                  >
                    Sign in
                  </button>
                  <Link
                    to="/signUp"
                    className="btn btn-primary"
                    id="buttonLogin"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>

              {error && <p>{error}</p>}
              <br />
              <div className="form-group row">
                <div className="col-sm-10">
                  <Link to="/forgotPassword">Forgot Password?</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

