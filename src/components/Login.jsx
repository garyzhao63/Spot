import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react';
import {login} from '../server/api';

export class LoginButton extends Component {
  render() {
    return (
      <React.Fragment>
        <Button
          size='small'
          compact
          icon
          labelPosition='left'
          color='google plus'
          onClick={login}
        >
          <Icon name='google' />
          Log In with Google
                </Button>
      </React.Fragment>
    );
  }
}