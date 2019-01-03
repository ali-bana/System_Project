import React, { Component } from "react";
import "./App.css";
import UserSignUp from "./userSignUpPage.jsx";
import HousePage from "./housePage.jsx";
import HouseSummery from "./components/houseComponents/houseSummery.jsx";
import HouseDisplay from "./components/houseComponents/HouseDisplay.jsx";
import HouseFilterBar from "./components/houseComponents/HouseFilterBar.jsx";
import HouseSearchPage from "./HouseSearchPage.jsx";
class App extends Component {
  render() {
    return (
      <div className="App">
        <HouseSearchPage />
      </div>
    );
  }
}

export default App;
