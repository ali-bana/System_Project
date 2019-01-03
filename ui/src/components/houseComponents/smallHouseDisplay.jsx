import React, { Component } from "react";
import { Pagination, Grid, Label } from "semantic-ui-react";
import HouseSummery from "./houseSummery.jsx";

class HouseDisplaySmall extends Component {
  state = {};
  styles = {
    margin: "auto"
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "#F5F5F5",
          width: 1100,
          margin: "auto",
          marginTop: 100
        }}
      >
        <Label
          style={{
            margin: 20
          }}
          size="massive"
        >
          {this.props.label}
        </Label>
        <Grid style={this.styles}>
          <Grid.Row columns={3}>
            <Grid.Column>
              <HouseSummery />
            </Grid.Column>
            <Grid.Column>
              <HouseSummery />
            </Grid.Column>
            <Grid.Column>
              <HouseSummery />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Pagination defaultActivePage={5} totalPages={10} />
      </div>
    );
  }
}

export default HouseDisplaySmall;
