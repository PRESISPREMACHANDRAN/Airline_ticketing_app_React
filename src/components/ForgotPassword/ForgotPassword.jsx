import React, { useState } from "react";
import Footer from "../Footer/Footer";
import LoginHeader from "../Header/LoginHeader";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    if (email === "") {
      window.alert("Please enter your valid email ID");
    } else {
      // Perform password reset logic and send email with new password
      // Replace the following line with your actual logic
      window.alert(`New password sent to ${email}`);
    }
  };


  const containerStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "30px",
    height: "590px",
    marginBottom: "7px",
    marginTop: "7px",
  };

  return (
    <>
      <LoginHeader />
      <div className="container" style={containerStyle}>
        <div className="row">
          <div className="col col-12 col-sm-12 col md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="card text-center" style={{ width: "300px",marginLeft:'450PX' }}>
              <div className="card-header h5 text-white bg-primary">
                Password Reset
              </div>
              <div className="card-body px-5">
                <p className="card-text py-2">
                  Enter your email address, and we'll send you an email with
                  instructions to reset your password.
                </p>
                <div className="form-outline">
                  <input
                    type="email"
                    id="typeEmail"
                    className="form-control my-3"
                    value={email}
                    placeholder="Enter EmailID.."
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                

                <button
                  className="btn btn-primary w-100"
                  onClick={handleResetPassword}
                >
                  Reset Password
                </button>
                <div className="d-flex justify-content-between mt-4">
                  <Link to="/login">Login</Link>
                  <Link to="/signUp">Register</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
