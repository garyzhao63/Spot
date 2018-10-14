import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';

export default class FindContainer extends Component {
  render() {
    return (
      <div>
        <Icon name='search' size='massive' />
        <h1>
          Find a parking spot!
        </h1>
      </div>
    );
  }
}