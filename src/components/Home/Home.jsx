import React from "react";
import Footer from "../Footer/Footer";
import HomeHeader from "../Header/HomeHeader";
import "./Home.css";
import backgroundImage from "../assets/backgroundImage.jpg";

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "30px",
    height: "590px",
    marginBottom: "7px",
    marginTop: "7px"
  };

  return (
    <>
      <HomeHeader />
      <div className="container" style={containerStyle}>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
