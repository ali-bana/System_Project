import React, { Component } from "react";
import "./App.css";
import UserSignUp from "./userSignUpPage.jsx";
import HousePage from "./housePage.jsx";
class App extends Component {
  render() {
    return (
      <div className="App">
        <HousePage />
      </div>
    );
  }
}

export default App;
