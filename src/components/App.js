import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import MenuHeaderExample from './Navbar';
import * as db from '../server/api';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuHeaderExample/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={db.addListing("some shit")}
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
