import React, {Component} from 'react';
import {Segment, Container, Form, Icon, Input, Label} from 'semantic-ui-react';
import * as api from '../server/api';
import {firebase, auth} from '../server/Firebase';
import LocationSearchBar from './LocationSearchBar';

export default class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: '',
      description: '',
      latitude: null,
      longitude: null,
      locationLoading: false,
      locationError: false,
    }
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          locationLoading: false,
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
        this.setState({locationError: true});
      });
    } else {
      alert("Geolocation is not supported by this browser.");
      this.setState({locationError: true});
    }
  }

  handleLocationFind = (latitude, longitude) => {
    this.setState({latitude, longitude});
  }

  handleSubmit = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        // ...
        const {title, price, description, latitude, longitude} = this.state;
        let location = null;
        if (latitude && longitude) {
          location = new firebase.firestore.GeoPoint(latitude, longitude);
        }

        api.addListing(
          this.state.title,
          {
            title,
            price,
            description,
            location,
            latitude,
            longitude,
            email,
            userName: displayName,
            date: new Date(),
          },
          (error) => {
            if (error) {
              alert(error);
            } else {
              this.setState({
                title: '',
                price: '',
                description: '',
                latitude: null,
                longitude: null,
              });
            }
        });
        alert("Submitted!")
      } else {
        // User is signed out.
        // ...
        alert("You must sign in to post")
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

        <Segment inverted>
        <Form inverted onSubmit={this.handleSubmit} loading={this.state.locationLoading && !this.state.locationError}>
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
            <Form.Input label='Search Location'><LocationSearchBar onLocationFind={this.handleLocationFind} /></Form.Input>
            <h3>OR</h3>
            <Form.Button
              label='Get Current Location'
              content={<Icon name='location arrow' />}
              type='button'
              onClick={() => this.setState({locationLoading: true}, this.getLocation)}
              color={(this.state.latitude && this.state.latitude) ? 'green'
                : this.state.locationError ? 'red'
                : 'grey'} />
          </Form.Group>
          <Form.TextArea
            label='Description'
            placeholder='Describe the spot.'
            onChange={(e, data) => this.setState({description: data.value})}
            value={this.state.description}
          />
          <Form.Button type='submit' content='Submit' />
        </Form>
        </Segment>

      </Container>
    );
  }
}