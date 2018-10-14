import React, {Component} from 'react';
import {Button, Container, Icon, Input, Label} from 'semantic-ui-react';
import * as api from '../server/api';
import {firebase} from '../server/Firebase';

export default class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      price: '',
      latitude: null,
      longitude: null,
    }
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
      }, (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
        }
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  handleSubmit = () => {
    const {price, latitude, longitude} = this.state;
    let location = null;
    if (latitude && longitude) {
      location = new firebase.firestore.GeoPoint(latitude, longitude);
    }

    api.addListing(this.state.description, {price, location}, (error) => {
      if (error) {
        alert(error);
      } else {
        this.setState({
          description: '',
          price: '',
          latitude: null,
          longitude: null,
        })
      }
    });
  }

  render() {
    return (
      <Container className='post-container'>
        <Icon name='car' size='massive' />
        <h1>
          Post a parking spot!
        </h1>

        {this.getLocation()}

        <Input
          fluid
          label='Description'
          placeholder='Spot in garage at La Scala'
          onChange={(e, data) => this.setState({description: data.value})}
          value={this.state.description}
        />
        <Input
          label='Price'
          icon
          iconPosition='left'
          placeholder='50'
          onChange={(e, data) => this.setState({price: data.value})}
          value={this.state.price}
        >
          <Label>$</Label>
          <input />
        </Input>
        <Button positive onClick={this.handleSubmit}>
          Post
        </Button>

      </Container>
    );
  }
}