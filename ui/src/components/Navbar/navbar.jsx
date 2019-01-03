import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu style={{ backgroundColor: "#C0C0C0" }}>
        <Menu.Item
          name="browse"
          active={activeItem === "browse"}
          onClick={this.handleItemClick}
        >
          Browse
        </Menu.Item>

        <Menu.Item
          name="dashboard"
          active={activeItem === "dashboard"}
          onClick={this.handleItemClick}
        >
          Dashboard
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="signup"
            active={activeItem === "signup"}
            onClick={this.handleItemClick}
          >
            Sign Up
          </Menu.Item>

          <Menu.Item
            name="signin"
            active={activeItem === "signin"}
            onClick={this.handleItemClick}
          >
            Sign In
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
