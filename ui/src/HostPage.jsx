import React, { Component } from "react";
import SmallHouseDisplay from "./components/houseComponents/smallHouseDisplay.jsx";
import NavBar from "./components/Navbar/navbar.jsx";
import HostProfDis from "./components/hostComponents/hostProfileDisplay.jsx";
import bk from "./Images/bk.jpg";
import ComSec from "./components/comment/commentSection.jsx";

class HostPage extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${bk})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed"
        }}
      >
        <div>
          <NavBar />
          <div
            style={{ backgroundColor: "#F5F5F5", width: 1100, margin: "auto" }}
          >
            <HostProfDis />
          </div>
          <SmallHouseDisplay label="His Houses" />
          <div
            style={{
              backgroundColor: "#F5F5F5",
              width: 1100,
              margin: "auto",
              marginTop: 100
            }}
          >
            <div>
              <ComSec />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HostPage;
