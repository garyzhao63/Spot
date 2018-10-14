import React, {Component} from 'react';
import logo from '../logo.svg';
import * as db from '../server/api';

export default class Home extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => db.getListing("Listing1", (data, error) => {
            if (error) alert(error);
            else alert(data.user);
          })} 
        >
          Learn React
          </a>
      </div>
    );
  }
}