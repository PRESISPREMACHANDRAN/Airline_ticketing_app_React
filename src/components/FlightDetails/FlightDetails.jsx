import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import UserHeader from "../Header/UserHeader";
import "./FlightDetails.css";

const FlightDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { flight } = location.state;

  const flightContainer = {
    height: "590px",
    padding: "30px",
    marginTop: "3px",
    marginBottom: "5px",
    marginRight: "60px",
    marginLeft: "80px",
  };

  const handleContinue = () => {
    navigate("/seatBooking");
  };

  return (
    <>
      <UserHeader />
      <div className="container mt-5" style={flightContainer}>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Flight Details</div>
              <div className="card-body">
                <p>
                  <strong>Flight Name:</strong> {flight.flightName}
                </p>
                <p>
                  <strong>Time From:</strong> {flight.timeFrom}
                </p>
                <p>
                  <strong>Time To:</strong> {flight.timeTo}
                </p>
                <p>
                  <strong>Duration:</strong> {flight.flightDuration}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Select Class</div>
              <div className="card-body">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="class"
                    id="businessClass"
                    value="business"
                    checked
                  />
                  <label className="form-check-label" htmlFor="businessClass">
                    Business Class: ${flight.businessClassPrice}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="class"
                    id="economyClass"
                    value="economy"
                  />
                  <label className="form-check-label" htmlFor="economyClass">
                    Economy Class: ${flight.economyClassPrice}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="continueButton">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FlightDetails;
