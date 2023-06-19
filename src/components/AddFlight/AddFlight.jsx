
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import AdminHeader from "../Header/AdminHeader";
import './AddFlight.css'

const AddFlight = () => {
  const [flightNumber, setFlightNumber] = useState("");
  const [startLocation, setStartLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [period, setPeriod] = useState("");
  const [cabin, setCabin] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission

    // Create a flight object with the entered details
    const flight = {
      flightNumber,
      startLocation,
      destinationLocation,
      departureTime,
      arrivalTime,
      period,
      cabin,
    };

    // Save the flight object to your desired storage or API
    // For demonstration purposes, we'll simply log it to the console
    console.log(flight);
    alert(`Flight Number: ${flight.flightNumber}
Start Location: ${flight.startLocation}
Destination Location: ${flight.destinationLocation}
Departure Time: ${flight.departureTime}
Arrival Time: ${flight.arrivalTime}
Period: ${flight.period}
Cabin: ${flight.cabin}`);
 

    // Reset the form fields after submission
    setFlightNumber("");
    setStartLocation("");
    setDestinationLocation("");
    setDepartureTime("");
    setArrivalTime("");
    setPeriod("");
    setCabin("");
  };


   const handleCancel = () => {
     // Reset the form fields to their initial values
     setFlightNumber("");
     setStartLocation("");
     setDestinationLocation("");
     setDepartureTime("");
     setArrivalTime("");
     setPeriod("");
     setCabin("");
   };

  return (
    <>
      <AdminHeader />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl 6">
            <div className="addFlight">
              <h3 >Add Flight</h3>
              <hr />
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="flightNumber">Flight Number:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="flightNumber"
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="startLocation">From:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="startLocation"
                    value={startLocation}
                    onChange={(e) => setStartLocation(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="destinationLocation">To:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="destinationLocation"
                    value={destinationLocation}
                    onChange={(e) => setDestinationLocation(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="departureTime">Depart:</label>
                  <input
                    type="time"
                    className="form-control"
                    id="departureTime"
                    value={departureTime}
                    onChange={(e) => setDepartureTime(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="arrivalTime">Arrive:</label>
                  <input
                    type="time"
                    className="form-control"
                    id="arrivalTime"
                    value={arrivalTime}
                    onChange={(e) => setArrivalTime(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="period">Period:</label>
                  <select
                    className="form-control"
                    id="period"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    required
                  >
                    <option value="">-- Select Period --</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="cabin">Cabin:</label>
                  <select
                    className="form-control"
                    id="cabin"
                    value={cabin}
                    onChange={(e) => setCabin(e.target.value)}
                    required
                  >
                    <option value="">-- Select Cabin --</option>
                    <option value="economy">Economy</option>
                    <option value="business">Business</option>
                  </select>
                </div>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <button
                      type="submit"
                      className="btn btn-primary "
                      id="buttonAddFlight"
                    >
                      Add
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary"
                      id="buttonAddFlight"
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
      </div>
      <Footer />
    </>
  );
};

export default AddFlight;





