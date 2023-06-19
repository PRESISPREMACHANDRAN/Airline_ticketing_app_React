import React, { useRef } from "react";
import Footer from "../Footer/Footer";
import LoginHeader from "../Header/LoginHeader";
import "./SignUp.css";

const SignUp = () => {
  const formRef = useRef(null); // Reference to the form element

  const handleSignUp = (event) => {
    event.preventDefault(); // Prevent form submission
    // Perform any necessary validation or API requests
    // Show alert box with success message
    alert("You have successfully created an account!");
    formRef.current.reset(); // Reset the form
  };


   const handleCancel = () => {
     formRef.current.reset(); // Reset the form
   };
  return (
    <>
      <LoginHeader />
      <div className="containerSignUp">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div class="form-group row">
              <h1>Registration</h1>
            </div>

            <form ref={formRef} onSubmit={handleSignUp}>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label for="userName">UserName:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="userName"
                    placeholder="Enter UserName...."
                    required
                  />
                </div>
                <div class="col-sm-6">
                  <label for="firstName">FirstName:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder="Enter FirstName...."
                    required
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-sm-6">
                  <label for="lastName">LastName:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder="Enter LastName...."
                    required
                  />
                </div>
                <div class="col-sm-6">
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter Email...."
                    required
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-sm-6">
                  <label for="dob">Date of Birth:</label>
                  <input
                    type="date"
                    class="form-control"
                    id="dob"
                    name="dob"
                    required
                  />
                </div>
                <div class="col-sm-6">
                  <label for="phone">Phone Number:</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-sm-6">
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter Password...."
                    required
                  />
                </div>
                <div class="col-sm-6">
                  <label for="confirmPassword">Confirm Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="confirmPassword"
                    placeholder="Enter Confirm Password...."
                    required
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-sm-6">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    id="buttonLogin"
                  >
                    Sign Up
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    id="buttonLogin"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
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

export default SignUp;