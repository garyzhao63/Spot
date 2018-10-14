import React, { Component } from 'react';
import '../css/App.css';
import MenuHeaderExample from './Navbar';
import * as db from '../server/api';
import Header from './Header';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
