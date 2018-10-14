import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';

export default class PostContainer extends Component {
  render() {
    return (
      <div>
        <Icon name='car' size='massive' />
        <h1>
          Post a parking spot!
        </h1>
      </div>
    );
  }
}