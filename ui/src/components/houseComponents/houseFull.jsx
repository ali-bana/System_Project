import React, { Component } from "react";
import { Image, Grid, Label, GridColumn, Rating } from "semantic-ui-react";
import Top from "./HouseFullTop.jsx";
import fi from "../../Images/h1.jpg";
import si from "../../Images/h2.jpg";
import ti from "../../Images/h3.jpg";
import ComSec from "../comment/commentSection";

class HouseFull extends Component {
  state = {
    state: "info",
    image1: fi,
    image2: si,
    image3: ti,
    name: "Mr. Cobain Apartment",
    bedNum: 4,
    roomNUm: 2,
    area: 150,
    yard: "Yes",
    parkingNum: 4,
    rate: 2,
    priceOneNight: "150$",
    maxCapacity: 5,
    owner: "Late Mr. Cobain",
    moreInfo:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto qui doloremque possimus corporis labore modi sit alias, iure aut nisi incidunt itaque eum veniam, quo velit cumque rerum recusandae fuga!"
  };

  changeView = () => {
    if (this.state.state === "info") {
      this.setState({ state: "image" });
    } else {
      this.setState({ state: "info" });
    }
  };
  styles = {
    margin: 20
  };

  render() {
    return (
      <div
        style={{
          width: 900,
          margin: "auto",
          backgroundColor: "#F5F5F5",
          marginTop: 100,
          alignItems: "right"
        }}
      >
        <Top change={this.changeView} />
        {this.state.state === "info" ? (
          <div>
            <Label size={"massive"} style={this.styles}>
              {this.state.name}
            </Label>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Label style={this.styles} size="big">
                    Number of Rooms: {this.state.roomNUm}
                  </Label>
                </Grid.Column>
                <Grid.Column>
                  <Label style={this.styles} size="big">
                    Number of Beds: {this.state.bedNum}
                  </Label>
                </Grid.Column>
                <Grid.Column>
                  <Label style={this.styles} size="big">
                    Area: {this.state.area}
                  </Label>
                </Grid.Column>
                <Grid.Column>
                  <Label style={this.styles} size="big">
                    Yard: {this.state.yard}
                  </Label>
                </Grid.Column>
                <Grid.Column>
                  <Label style={this.styles} size="big">
                    Nember of Parkings: {this.state.parkingNum}
                  </Label>
                </Grid.Column>
                <Grid.Column>
                  <Label style={this.styles} size="big">
                    Price (one Night): {this.state.priceOneNight}
                  </Label>
                </Grid.Column>
                <Grid.Column>
                  <Label style={this.styles} size="big">
                    Max Capacity: {this.state.maxCapacity}
                  </Label>
                </Grid.Column>
                <Grid.Column>
                  <Label style={this.styles} size="big">
                    Owner: {this.state.owner}
                  </Label>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Label
              style={{ width: 700, height: 200, margin: "auto" }}
              size="large"
            >
              {this.state.moreInfo}
            </Label>
            <ComSec />

            <Label style={{ backgroundColor: "#F5F5F5" }} size="large">
              Rate:
            </Label>
            <Rating
              icon="star"
              defaultRating={this.state.rate}
              maxRating={5}
              style={this.styles}
              size="large"
            />
          </div>
        ) : (
          <Grid style={{ margin: "auto" }}>
            <Grid.Row columns={2}>
              <GridColumn>
                <Image
                  src={this.state.image1}
                  size={"medium"}
                  style={{ margin: "auto", marginBottom: 20 }}
                />
              </GridColumn>
              <Grid.Column>
                <Image
                  src={this.state.image2}
                  size={"medium"}
                  style={{ margin: "auto", marginBottom: 20 }}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={2}>
              <Grid.Column>
                <Image
                  src={this.state.image3}
                  size={"medium"}
                  style={{ margin: "auto", marginBottom: 20 }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </div>
    );
  }
}

export default HouseFull;
{
  /* <Image src="/images/wireframe/image.png" size="small" />; */
}
