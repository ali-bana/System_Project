import React, { Component } from "react";
import NavBar from "./components/Navbar/navbar.jsx";
import UserForm from "./components/regForm/newUserForm/userReg.jsx";
import bk from "./Images/bk.jpg";
class UserSignUpPage extends Component {
  state = {};
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
        <NavBar />
        <div
          style={{
            width: 900,
            margin: "auto",
            marginTop: 100,
            marginBottom: 100
          }}
        >
          <UserForm />
        </div>
      </div>
    );
  }
}

export default UserSignUpPage;
