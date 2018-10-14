import React, {Component} from 'react';
import {Icon, Button} from 'semantic-ui-react';

export default class NotificationsContainer extends Component {
  render() {
    return (
      <div>
        <Icon name='setting' size='massive' />
        <h1>
          Check your notifications!
        </h1>
      </div>
    );
  }
}