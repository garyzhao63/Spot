import React, {Component} from 'react';
import {Segment, Container, Form, Icon, Input, Label} from 'semantic-ui-react';
import * as api from '../server/api';
import {firebase} from '../server/Firebase';

export default class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: '',
      description: '',
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
    const {title, price, description, latitude, longitude} = this.state;
    let location = null;
    if (latitude && longitude) {
      location = new firebase.firestore.GeoPoint(latitude, longitude);
    }

    api.addListing(this.state.title, {title, price, description, location, latitude, longitude}, (error) => {
      if (error) {
        alert(error);
      } else {
        this.setState({
          title: '',
          price: '',
          description: '',
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

        <Segment inverted>
        <Form inverted onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              required
              label='Title'
              placeholder='Spot in garage at La Scala'
              onChange={(e, data) => this.setState({title: data.value})}
              value={this.state.title}
              width='5'
            />
            <Form.Input
              required
              label='Price'
              placeholder='50'
              onChange={(e, data) => this.setState({price: data.value})}
              value={this.state.price}
              width='1'
            />
          </Form.Group>
          <Form.TextArea
            required
            label='Description'
            placeholder='Describe the spot.'
            onChange={(e, data) => this.setState({description: data.value})}
            value={this.state.description}
          />
          <Form.Button content='Submit' />
        </Form>
        </Segment>

      </Container>
    );
  }
}