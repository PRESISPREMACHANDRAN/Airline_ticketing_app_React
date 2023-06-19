
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SeatSelection.css";
import Footer from "../Footer/Footer";
import UserHeader from "../Header/UserHeader";

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      // Seat is already selected, so remove it from the list
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      // Seat is not selected, so add it to the list
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleConfirm = () => {
    if (selectedSeats.length > 0) {
      alert("Your seat is confirmed");
      setSelectedSeats([]); // Reset selected seats to an empty array
    } else {
      alert("Please select a seat");
    }
  };

  return (
    <>
      <UserHeader />

      <div className="plane">
        <div className="select">
          <h1>Please select a seat</h1>
        </div>
        <div className="exit"></div>
        <ol>
          <li>
            <ol className="seats">
              <li className="seat">
                <input
                  type="checkbox"
                  id="1A"
                  onChange={() => handleSeatSelection("1A")}
                />
                <label htmlFor="1A">1A</label>
              </li>

              <li className="seat">
                <input
                  type="checkbox"
                  id="1B"
                  onChange={() => handleSeatSelection("1B")}
                />
                <label htmlFor="1B">1B</label>
              </li>

              <li class="seat">
                <input
                  type="checkbox"
                  id="1C"
                  onChange={() => handleSeatSelection("1C")}
                />
                <label for="1C">1C</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="1D"
                  onChange={() => handleSeatSelection("1D")}
                />
                <label for="1D">1D</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="1E"
                  onChange={() => handleSeatSelection("1E")}
                />
                <label for="1E">1E</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="1F"
                  onChange={() => handleSeatSelection("1F")}
                />
                <label for="1F">1F</label>
              </li>
            </ol>
          </li>
          <li>
            <ol class="seats">
              <li class="seat">
                <input
                  type="checkbox"
                  id="2A"
                  onChange={() => handleSeatSelection("2A")}
                />
                <label for="2A">2A</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="2B"
                  onChange={() => handleSeatSelection("2B")}
                />
                <label for="2B">2B</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="2C"
                  onChange={() => handleSeatSelection("2C")}
                />
                <label for="2C">2C</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="2D"
                  onChange={() => handleSeatSelection("2D")}
                />
                <label for="2D">2D</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="2E"
                  onChange={() => handleSeatSelection("2E")}
                />
                <label for="2E">2E</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="2F"
                  onChange={() => handleSeatSelection("2F")}
                />
                <label for="2F">2F</label>
              </li>
            </ol>
          </li>
          <li>
            <ol class="seats">
              <li class="seat">
                <input
                  type="checkbox"
                  id="3A"
                  onChange={() => handleSeatSelection("3A")}
                />
                <label for="3A">3A</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="3B"
                  onChange={() => handleSeatSelection("3B")}
                />
                <label for="3B">3B</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="3C"
                  onChange={() => handleSeatSelection("3C")}
                />
                <label for="3C">3C</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="3D"
                  onChange={() => handleSeatSelection("3D")}
                />
                <label for="3D">3D</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="3E"
                  onChange={() => handleSeatSelection("3E")}
                />
                <label for="3E">3E</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="3F"
                  onChange={() => handleSeatSelection("3F")}
                />
                <label for="3F">3F</label>
              </li>
            </ol>
          </li>
          <li>
            <ol class="seats">
              <li class="seat">
                <input
                  type="checkbox"
                  id="4A"
                  onChange={() => handleSeatSelection("4A")}
                />
                <label for="4A">4A</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="4B"
                  onChange={() => handleSeatSelection("4B")}
                />
                <label for="4B">4B</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="4C"
                  onChange={() => handleSeatSelection("4C")}
                />
                <label for="4C">4C</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="4D"
                  onChange={() => handleSeatSelection("4D")}
                />
                <label for="4D">4D</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="4E"
                  onChange={() => handleSeatSelection("4E")}
                />
                <label for="4E">4E</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="4F"
                  onChange={() => handleSeatSelection("4F")}
                />
                <label for="4F">4F</label>
              </li>
            </ol>
          </li>
          <li>
            <ol class="seats">
              <li class="seat">
                <input
                  type="checkbox"
                  id="5A"
                  onChange={() => handleSeatSelection("5A")}
                />
                <label for="5A">5A</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="5B"
                  onChange={() => handleSeatSelection("5B")}
                />
                <label for="5B">5B</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="5C"
                  onChange={() => handleSeatSelection("5C")}
                />
                <label for="5C">5C</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="5D"
                  onChange={() => handleSeatSelection("5D")}
                />
                <label for="5D">5D</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="5E"
                  onChange={() => handleSeatSelection("5E")}
                />
                <label for="5E">5E</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="5F"
                  onChange={() => handleSeatSelection("5F")}
                />
                <label for="5F">5F</label>
              </li>
            </ol>
          </li>
          <li>
            <ol class="seats">
              <li class="seat">
                <input
                  type="checkbox"
                  id="6A"
                  onChange={() => handleSeatSelection("6A")}
                />
                <label for="6A">6A</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="6B"
                  onChange={() => handleSeatSelection("6B")}
                />
                <label for="6B">6B</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="6C"
                  onChange={() => handleSeatSelection("6C")}
                />
                <label for="6C">6C</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="6D"
                  onChange={() => handleSeatSelection("6D")}
                />
                <label for="6D">6D</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="6E"
                  onChange={() => handleSeatSelection("6E")}
                />
                <label for="6E">6E</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="6F"
                  onChange={() => handleSeatSelection("6F")}
                />
                <label for="6F">6F</label>
              </li>
            </ol>
          </li>
          <li>
            <ol class="seats">
              <li class="seat">
                <input
                  type="checkbox"
                  id="7A"
                  onChange={() => handleSeatSelection("7A")}
                />
                <label for="7A">7A</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="7B"
                  onChange={() => handleSeatSelection("7B")}
                />
                <label for="7B">7B</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="7C"
                  onChange={() => handleSeatSelection("7C")}
                />
                <label for="7C">7C</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="7D"
                  onChange={() => handleSeatSelection("7D")}
                />
                <label for="7D">7D</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="7E"
                  onChange={() => handleSeatSelection("7E")}
                />
                <label for="7E">7E</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="7F"
                  onChange={() => handleSeatSelection("7F")}
                />
                <label for="7F">7F</label>
              </li>
            </ol>
          </li>
          <li>
            <ol class="seats">
              <li class="seat">
                <input
                  type="checkbox"
                  id="8A"
                  onChange={() => handleSeatSelection("8A")}
                />
                <label for="8A">8A</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="8B"
                  onChange={() => handleSeatSelection("8B")}
                />
                <label for="8B">8B</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="8C"
                  onChange={() => handleSeatSelection("8C")}
                />
                <label for="8C">8C</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="8D"
                  onChange={() => handleSeatSelection("8D")}
                />
                <label for="8D">8D</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="8E"
                  onChange={() => handleSeatSelection("8E")}
                />
                <label for="8E">8E</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="8F"
                  onChange={() => handleSeatSelection("8F")}
                />
                <label for="8F">8F</label>
              </li>
            </ol>
          </li>
          <li>
            <ol class="seats">
              <li class="seat">
                <input
                  type="checkbox"
                  id="9A"
                  onChange={() => handleSeatSelection("9A")}
                />
                <label for="9A">9A</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="9B"
                  onChange={() => handleSeatSelection("9B")}
                />
                <label for="9B">9B</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="9C"
                  onChange={() => handleSeatSelection("9C")}
                />
                <label for="9C">9C</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="9D"
                  onChange={() => handleSeatSelection("9D")}
                />
                <label for="9D">9D</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="9E"
                  onChange={() => handleSeatSelection("9E")}
                />
                <label for="9E">9E</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="9F"
                  onChange={() => handleSeatSelection("9F")}
                />
                <label for="9F">9F</label>
              </li>
            </ol>
          </li>
          <li>
            <ol class="seats">
              <li class="seat">
                <input
                  type="checkbox"
                  id="10A"
                  onChange={() => handleSeatSelection("10A")}
                />
                <label for="10A">10A</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="10B"
                  onChange={() => handleSeatSelection("10B")}
                />
                <label for="10B">10B</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="10C"
                  onChange={() => handleSeatSelection("10C")}
                />
                <label for="10C">10C</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="10D"
                  onChange={() => handleSeatSelection("10D")}
                />
                <label for="10D">10D</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="10E"
                  onChange={() => handleSeatSelection("10E")}
                />
                <label for="10E">10E</label>
              </li>
              <li class="seat">
                <input
                  type="checkbox"
                  id="10F"
                  onChange={() => handleSeatSelection("10F")}
                />
                <label for="10F">10F</label>
              </li>
            </ol>
          </li>
        </ol>
        <div className="exit"></div>
      </div>
      <div className="form-group row">
        <div className="confirmButton">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SeatSelection;