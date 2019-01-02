import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  Grid,
  Menu,
  Segment
} from "semantic-ui-react";
import FormTop from "./formTop.jsx";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" }
];

class userReg extends Component {
  state = {
    formType: "sing In"
  };

  handleChange = (e, { value }) => this.setState({ value });
  handleFormChange = () => {
    if (this.state.formType == "signUp") {
      this.setState({ formType: "signIn" });
    } else {
      this.setState({ formType: "signUp" });
    }
  };
  render() {
    const { value } = this.state;
    return (
      <div style={{ width: 800, backgroundColor: "#F5F5F5", margin: "auto" }}>
        <FormTop changeView={this.handleFormChange} />
        {this.state.formType == "signIn" ? (
          <Form style={{ margin: "auto", width: 700 }}>
            <label>
              <br />
            </label>
            <Form.Group widths="equal">
              <Form.Field
                required
                control={Input}
                label="First name"
                placeholder="First name"
              />
              <Form.Field
                required
                control={Input}
                label="Last name"
                placeholder="Last name"
              />
              <Form.Field
                required
                control={Select}
                label="Gender"
                options={options}
                placeholder="Gender"
              />
            </Form.Group>
            <Form.Group inline required>
              <label>Account Type</label>
              <Form.Field
                control={Radio}
                label="Guest"
                value="1"
                checked={value === "1"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Host"
                value="2"
                checked={value === "2"}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group widths="equal" style={{ margin: 20, marginTop: 30 }}>
              <Form.Field
                required
                control={Input}
                label="Password"
                placeholder="Password"
              />

              <Form.Field
                required
                control={Input}
                label="Password Confirm"
                placeholder="Password Confirm"
              />
            </Form.Group>

            <Form.Input
              label="Email"
              placeholder="joe@schmoe.com"
              style={{ width: 300 }}
            />

            <Form.Input
              label="National ID"
              placeholder="111 111 1111"
              style={{ width: 200 }}
            />

            <Form.Input
              label="Credit Card no."
              placeholder="1111 1111 1111 1111"
              style={{ width: 200 }}
            />

            {/* this is last part of the form */}
            <Form.Field
              required
              control={Checkbox}
              label="I agree to the Terms and Conditions"
            />

            <Form.Field control={Button} style={{ margin: 30 }}>
              Submit
            </Form.Field>
          </Form>
        ) : (
          <Form unstackable style={{ width: 700, margin: "auto" }}>
            <Form.Group widths={2}>
              <Form.Input label="First name" placeholder="First name" />
              <Form.Input label="Last name" placeholder="Last name" />
            </Form.Group>
            <Button type="submit" style={{ margin: 20 }}>
              Login
            </Button>
          </Form>
        )}
      </div>
    );
  }
}

export default userReg;
