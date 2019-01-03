import React, { Component } from "react";
import NavBar from "./components/Navbar/navbar.jsx";
import HouseDisplay from "./components/houseComponents/HouseDisplay.jsx";
import HouseFilter from "./components/houseComponents/HouseFilterBar.jsx";
import bk from "./Images/bk.jpg";

class HouseSearchPage extends Component {
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
          backgroundPosition: "fixed"
        }}
      >
        <NavBar />
        <HouseFilter />
        <HouseDisplay />
      </div>
    );
  }
}

export default HouseSearchPage;
