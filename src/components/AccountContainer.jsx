import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react';

export default class AccountContainer extends Component {
  state = {};

  render() {
    return (
      <div>
        <Icon name='setting' size='massive' />
        <h1>
          Manage your account!
        </h1>
      </div>
    );
  }
}