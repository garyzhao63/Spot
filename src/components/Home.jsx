import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Icon} from 'semantic-ui-react';
import {navConsts} from '../constants';

export default class Home extends Component {
  render() {
    const {FIND, POST} = navConsts;

    return (
      <div>
        <Button.Group size='massive'>
          <Link to={'/' + FIND}>
            <Button icon labelPosition='left'>
              <Icon name='search' color='teal' />
              Find
            </Button>
          </Link>

          <Button.Or />

          <Link to={'/' + POST}>
            <Button icon labelPosition='right'>
              <Icon name='thumbtack' color='orange' />
              Post
            </Button>
          </Link>
        </Button.Group>
      </div>
    );
  }
}