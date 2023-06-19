import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import flightIcon from "../assets/flight.png";


const HomeHeader = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <nav className="navbar navbar-light ">
              <Link to="/" className="navbar-brand">
                <img
                  src={flightIcon}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt=""
                />
                <h1 className="header-title">Airline Ticketing</h1>
              </Link>
            </nav>
          </div>
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signUp" className="nav-link">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default HomeHeader;

