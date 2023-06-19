
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import UserHeader from "../Header/UserHeader";

const TicketDetails = () => {
  const [ticketsAvailable, setTicketsAvailable] = useState(false);
  const navigate = useNavigate();

  const ticketStyle = {
    height: "590px",
    padding: "30px",
    marginTop: "5px",
    marginBottom: "5px",
    marginRight: "60px",
    marginLeft: "80px",
  };

  const flightRoutes = [
    {
      from: "Malaysia",
      to: "India",
      flightName: "Air Asia",
      flightDuration: "6 hours",
      timeFrom: "10:00 AM .Malaysia",
      timeTo: "4:00 PM .India",
      businessClassPrice: 500,
      economyClassPrice: 250,
    },
    {
      from: "Paris",
      to: "New York",
      flightName: "Etihad",
      flightDuration: "8 hours",
      timeFrom: "12:00 PM .Paris",
      timeTo: "8:00 PM . New York",
      businessClassPrice: 800,
      economyClassPrice: 400,
    },
    {
      from: "London",
      to: "Sydney",
      flightName: "SpiceJet",
      flightDuration: "12 hours ",
      timeFrom: "9:00 PM .London",
      timeTo: "9:00 AM .Sydney",
      businessClassPrice: 900,
      economyClassPrice: 450,
    },
    {
      from: "Tokyo",
      to: "USA",
      flightName: "Emirates",
      flightDuration: "10 hours",
      timeFrom: "2:00 PM .Tokyo",
      timeTo: "12:00 AM .USA",
      businessClassPrice: 700,
      economyClassPrice: 350,
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    const isFormValid = e.target.checkValidity();
    if (!isFormValid) {
      e.stopPropagation();
    } else {
      // Get the selected from and to locations
      const selectedFromLocation =
        document.getElementById("fromLocation").value;
      const selectedToLocation = document.getElementById("toLocation").value;

      // Search for a flight in the flightRoutes array
      const flight = flightRoutes.find(
        (route) =>
          route.from === selectedFromLocation && route.to === selectedToLocation
      );

      if (flight) {
        setTicketsAvailable(true);

        // Redirect to FlightDetails page and pass the flight object as state
        navigate("/flightDetails", { state: { flight } });
      } else {
        setTicketsAvailable(false);
        // Show alert if no tickets are available
        alert("No tickets available between these locations");

        // Reset input fields
        document.getElementById("fromLocation").value = "";
        document.getElementById("toLocation").value = "";
        document.getElementById("departureDate").value = "";
        document.getElementById("returnDate").value = "";
        document.getElementById("passengerCount").value = "";
      }
    }
  };

  return (
    <>
      <UserHeader />
      <div className="container" style={ticketStyle}>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <form onSubmit={handleSearch}>
              <div className="form-group row">
                <h1>Ticket Details</h1>
              </div>
              <hr />

              <div className="form-group row">
                <div className="col-sm-4">
                  <h5>Select Trip:</h5>
                </div>

                <div className="col-sm-4">
                  <input
                    type="radio"
                    name="trip"
                    id="oneWay"
                    value="oneWay"
                    required
                  />

                  <label className="form-check-label" htmlFor="oneWay">
                    One Way
                  </label>
                </div>

                <div className="col-sm-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="trip"
                    id="roundTrip"
                    value="roundTrip"
                  />
                  <label className="form-check-label" htmlFor="roundTrip">
                    Round Trip
                  </label>
                </div>
              </div>
              <br />

              <div className="form-group row ">
                <label
                  htmlFor="fromLocation"
                  className="col-sm-3 col-form-label"
                >
                  Select Location
                </label>

                <div className="col-sm-3">
                  <select className="form-select" id="fromLocation" required>
                    <option value="">Select </option>
                    {flightRoutes.map((route) => (
                      <option key={route.from} value={route.from}>
                        {route.from}
                      </option>
                    ))}
                  </select>
                </div>

                <label htmlFor="toLocation" className="col-sm-3 col-form-label">
                  Select Destination
                </label>
                <div className="col-sm-3">
                  <select className="form-select" id="toLocation" required>
                    <option value="">Select </option>
                    {flightRoutes.map((route) => (
                      <option key={route.to} value={route.to}>
                        {route.to}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <br />

              <div class="form-group row">
                <div className="col-sm-3">
                  <label for="departureDate">Departure Date:</label>
                </div>
                <div className="col-sm-3">
                  <input type="date" class="form-control" id="departureDate" />
                </div>
                <div className="col-sm-3">
                  <label for="returnDate">Return Date:</label>
                </div>
                <div className="col-sm-3">
                  <input type="date" class="form-control" id="returnDate" />
                </div>
              </div>
              <br />

              <div class="form-group row">
                <div className="col-sm-4">
                  <label for="passengerCount">Passenger Count:</label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="number"
                    class="form-control"
                    id="passengerCount"
                  />
                </div>
              </div>
              <br />

              <div className="form-group row mt-3">
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-primary">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {ticketsAvailable && (
          <div className="row">
            <div className="col">
              <div className="alert alert-success mt-3" role="alert">
                Tickets available!
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default TicketDetails;
