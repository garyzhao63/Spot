import React, { Component } from 'react';
import logo from '../logo.svg';

export default class PostContainer extends Component {
  state = {};

  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Post a parking spot!
        </h1>
      </div>
    );
  }
}