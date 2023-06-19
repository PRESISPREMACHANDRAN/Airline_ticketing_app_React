
import React from "react";
import "./Footer.css"; // Import the CSS file for the Footer component

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="text-center footer" style={{ height: "50px" }}>
            {/* Rest of your footer content */}
            <span>
              © 2023 Copyright :
              <a className="text-white" href="#">
                 Presi S Premachandran
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


