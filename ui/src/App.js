import React, { Component } from "react";
import "./App.css";
import UserSignUp from "./userSignUpPage.jsx";
import HousePage from "./housePage.jsx";
import HouseSummery from "./components/houseComponents/houseSummery.jsx";
class App extends Component {
  render() {
    return (
      <div className="App">
        <HouseSummery />
      </div>
    );
  }
}

export default App;
