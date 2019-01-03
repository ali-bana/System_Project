import { Card, Icon, Image, Grid, Label } from "semantic-ui-react";
import im from "../../Images/h1.jpg";
import React, { Component } from "react";

class HouseSummery extends Component {
  state = {
    price: 1200,
    rooms: 4,
    owner: "Mr. Cobain",
    name: "Good Home",
    maxCapacity: 5,
    bed: 5,
    city: "Tehran",
    neighbourhood: "Pakdasht"
  };
  styles = {
    backgroundColor: "#DCDCDC"
  };
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <Card style={this.styles}>
          <a>
            <Image src={im} />
          </a>
          <Card.Content>
            <Card.Header>{this.state.name}</Card.Header>
            <Card.Meta>
              <span>
                {this.state.city}, {this.state.neighbourhood}
              </span>
            </Card.Meta>
            <Card.Description>
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Icon name="bed" />
                  </Grid.Column>
                  <Grid.Column>
                    <Label style={this.styles}>{this.state.bed}</Label>
                  </Grid.Column>
                  <Grid.Column>
                    <Icon name="money" />
                  </Grid.Column>
                  <Grid.Column>
                    <Label style={this.styles}>{this.state.price}</Label>
                  </Grid.Column>
                  <Grid.Column>
                    <Icon name="users" />
                  </Grid.Column>
                  <Grid.Column>
                    <Label style={this.styles}>{this.state.maxCapacity}</Label>
                  </Grid.Column>
                  <Grid.Column>
                    <Icon name="home" />
                  </Grid.Column>
                  <Grid.Column>
                    <Label style={this.styles}>{this.state.rooms}</Label>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Description>
          </Card.Content>

          <Card.Content extra>
            <a>
              <Icon name="user" />
              {this.state.owner}
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default HouseSummery;
