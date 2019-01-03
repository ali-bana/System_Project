import React, { Component } from "react";
import profI from "../../Images/a1.jpg";
import { Grid, Image, Label, GridRow, Rating } from "semantic-ui-react";

class HostProfileDisplay extends Component {
  state = {
    name: "Mr. Cobain",
    numberOfHouses: 5,
    rate: 2.5,
    contact: "a@b.gov"
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
        <Grid>
          <Grid.Row>
            <Grid.Column style={{ width: 300 }}>
              <Image src={profI} size="medium" style={{ margin: 20 }} />
            </Grid.Column>
            <Grid.Column style={{ width: 700 }}>
              <div style={{ textAlign: "left" }}>
                <Label
                  size="massive"
                  style={{ margin: 20, width: 180 }}
                  content={this.state.name}
                />
                <Grid style={{ width: 700, margin: 10 }}>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <Label
                        content={this.state.numberOfHouses}
                        icon="home"
                        size="large"
                        style={{ margin: "auto" }}
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <Label
                        content={this.state.contact}
                        icon="mail"
                        size="large"
                        style={{ margin: "auto" }}
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <Rating
                        icon="star"
                        defaultRating={this.state.rate}
                        maxRating={5}
                        style={{ marginTop: 30 }}
                        size="large"
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default HostProfileDisplay;
