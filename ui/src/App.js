import React, { Component } from "react";
import "./App.css";
import UserSignUp from "./userSignUpPage.jsx";
import HousePage from "./housePage.jsx";
import HouseSearchPage from "./HouseSearchPage.jsx";
import HostPage from "./HostPage.jsx";
import Primary from "./PrimaryPage.jsx";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Primary />
      </div>
    );
  }
}

export default App;
