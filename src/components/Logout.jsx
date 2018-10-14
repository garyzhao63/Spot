import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react';
import {logout} from '../server/api';

export class LogoutButton extends Component {
  render() {
    return (
      <div className='login-button'>
        <Button
          icon
          labelPosition='left'
          color='google plus'
          onClick={logout}
        >
          <Icon name='google' />
          Log Out
        </Button>
      </div>
    );
  }
}