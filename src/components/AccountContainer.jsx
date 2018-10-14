import React, { Component } from 'react';
import logo from '../logo.svg';

export default class AccountContainer extends Component {
  state = {};

  render() {
    return (
      <header className="App-container">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Manage your account!
        </h1>
      </header>
    );
  }
}