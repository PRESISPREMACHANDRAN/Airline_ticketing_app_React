import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import SeatBooking from "./components/SeatBooking/SeatSelection";
import DeleteFlight from "./components/DeleteFlight/DeleteFlight";
import Header from "./components/Header/HomeHeader";
import Footer from "./components/Footer/Footer";
import TicketDetails from "./components/TicketDetails/TicketDetails";
import AddFlight from "./components/AddFlight/AddFlight";
import AdminHeader from "./components/Header/AdminHeader";
import UserHeader from "./components/Header/UserHeader";
import HomeHeader from "./components/Header/HomeHeader";
import FlightDetails from "./components/FlightDetails/FlightDetails";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/header" exact element={<Header />} />
          <Route path="/adminHeader" exact element={<AdminHeader />} />
          <Route path="/userHeader" exact element={<UserHeader />} />
          <Route path="/homeHeader" exact element={<HomeHeader />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/forgotPassword" exact element={<ForgotPassword />} />
          <Route path="/ticketDetails" exact element={<TicketDetails />} />
          <Route path="/seatBooking" exact element={<SeatBooking />} />
          <Route path="/addFlight" exact element={<AddFlight />} />
          <Route path="/flightDetails" exact element={<FlightDetails />} />
          <Route path="/deleteFlight" exact element={<DeleteFlight />} />
          <Route path="/footer" exact element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
