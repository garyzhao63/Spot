import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react';
import {login} from '../server/api';

export class LoginButton extends Component {
  render() {
    return (
      <div className='login-button'>
        <Button
          icon
          labelPosition='left'
          color='google plus'
          onClick={login}
        >
          <Icon name='google' />
          Log In
        </Button>
      </div>
    );
  }
}