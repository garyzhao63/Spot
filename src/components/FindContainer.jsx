import React, { Component } from 'react';
import logo from '../logo.svg';

export default class FindContainer extends Component {
  state = {};

  render() {
    return (
      <header className="App-container">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Find a parking spot!
        </h1>
      </header>
    );
  }
}