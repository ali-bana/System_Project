import React, { Component } from "react";
import {
  Grid,
  Label,
  Form,
  GridColumn,
  Dropdown,
  Radio,
  Input,
  Button,
  Icon
} from "semantic-ui-react";

const neighbourhoods = [
  { key: "AL", value: "AL", text: "Alabama" },
  { key: "p", value: "p", text: "Pakdasht" },
  { key: "ALu", value: "ALu", text: "Aluak" },
  { key: "ma", value: "ma", text: "Mamazand" }
];

const sortBy = [
  { key: "AL", value: "AL", text: "Price" },
  { key: "AL", value: "AL", text: "Rate" },
  { key: "AL", value: "AL", text: "Views" }
];

class HouseFilterBar extends Component {
  state = {
    minPrice: 50,
    maxPrice: 800,
    display: false
  };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  render() {
    const minPrice = this.state.minPrice;
    const maxPrice = this.state.maxPrice;
    return (
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <Grid>
          <Grid.Row columns={5}>
            <Grid.Column style={{ width: 250, marginTop: 20 }}>
              <Label>Minimum Price</Label>
              <Form.Input
                label={`${minPrice}$ `}
                type="range"
                min={10}
                max={1000}
                name="minPrice"
                onChange={this.handleChange}
                value={minPrice}
                style={{ width: 200, margin: "auto" }}
              />
            </Grid.Column>
            <Grid.Column style={{ width: 250, marginTop: 20 }}>
              <Label>Maximum Price</Label>
              <Form.Input
                label={`${maxPrice}$ `}
                type="range"
                min={10}
                max={1000}
                name="maxPrice"
                onChange={this.handleChange}
                value={maxPrice}
                style={{ width: 200, margin: "auto" }}
              />
            </Grid.Column>
            <GridColumn>
              <Dropdown
                placeholder="Neighbourhood"
                search
                selection
                options={neighbourhoods}
                style={{ marginTop: 35 }}
              />
            </GridColumn>
            <Grid.Column>
              <Dropdown
                placeholder="Sort By"
                search
                selection
                options={sortBy}
                style={{ marginTop: 20 }}
              />
              <Radio toggle label="Increasing" style={{ marginTop: 10 }} />
            </Grid.Column>
            <Grid.Column style={{ margin: "auto", width: 100 }}>
              <Radio toggle label="Photo" style={{ margin: 20 }} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={4}>
            <Grid.Column>
              <Input placeholder="Number of Rooms" />
            </Grid.Column>
            <Grid.Column>
              <Input placeholder="Minimum Capacity" />
            </Grid.Column>
            <Grid.Column>
              <Input placeholder="Maximum Capacity" />
            </Grid.Column>
            <Grid.Column>
              <Button icon labelPosition="right">
                Filter
                <Icon name="filter" />
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default HouseFilterBar;
