import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class MenuExampleTabular extends Component {
  state = { activeItem: "Information" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.change();
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu tabular>
        <Menu.Item
          name="Information"
          active={activeItem === "Information"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Photos"
          active={activeItem === "Photos"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
