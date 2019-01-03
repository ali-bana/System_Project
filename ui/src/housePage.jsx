import React, { Component } from "react";
import Navbar from "./components/Navbar/navbar.jsx";
import HouseFull from "./components/houseComponents/houseFull.jsx";
import bk from "./Images/bk.jpg";

class housePage extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${bk})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: 840
        }}
      >
        <Navbar />
        <HouseFull />
      </div>
    );
  }
}

export default housePage;
