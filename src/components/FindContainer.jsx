import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react';
import logo from '../logo.svg';

export default class FindContainer extends Component {
  state = {};

  render() {
    return (
      <div>
        <Icon name='car' size='massive' />
        <h1>
          Find a parking spot!
        </h1>
      </div>
    );
  }
}