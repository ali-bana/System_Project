import React, { Component } from "react";
import bk from "./Images/bk.jpg";
import NavBar from "./components/Navbar/navbar.jsx";
import HomeSmallDis from "./components/houseComponents/smallHouseDisplay.jsx";

class PrimaryPage extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${bk})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        <NavBar />

        <HomeSmallDis label="Most Popular Houses" />
      </div>
    );
  }
}

export default PrimaryPage;
