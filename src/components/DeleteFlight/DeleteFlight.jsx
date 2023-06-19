



import React, { useState } from "react";
import Footer from "../Footer/Footer";
import AdminHeader from "../Header/AdminHeader";
import "./DeleteFlight.css";

const DeleteFlight = () => {
  const [selectedFlight, setSelectedFlight] = useState("");
  const [flightList, setFlightList] = useState([
    "XYZ123",
    "ABC123",
    "PQR123",
    "UVW098",
    "EFG000",
  ]);

  const handleDelete = (e) => {
    e.preventDefault();
    if (selectedFlight) {
      const updatedFlightList = flightList.filter(
        (flight) => flight !== selectedFlight
      );
      setFlightList(updatedFlightList);
      alert(`Flight with Number ${selectedFlight} is deleted.`);
      setSelectedFlight("");
    }
  };

  return (
    <>
      <AdminHeader />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="deleteFlight">
              <h3>Delete Flight</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="availableFlights">
                    Select Available Flights:
                  </label>
                  <select
                    className="form-control"
                    id="availableFlights"
                    value={selectedFlight}
                    onChange={(e) => setSelectedFlight(e.target.value)}
                  >
                    <option value="">-- Select Flight --</option>
                    {flightList.map((flight) => (
                      <option key={flight} value={flight}>
                        {flight}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group row">
                  <div className="col-sm-10">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      id="buttonDelete"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      id="buttonDelete"
                      onClick={() => setSelectedFlight("")}
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

export default DeleteFlight;















