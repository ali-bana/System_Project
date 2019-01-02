import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class FormTop extends Component {
  state = { activeItem: "sign in" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.changeView();
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu tabular>
        <Menu.Item
          name="sign up"
          active={activeItem === "sign up"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="sign in"
          active={activeItem === "sign in"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
export default FormTop;
