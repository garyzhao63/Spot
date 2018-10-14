import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import {Icon} from 'semantic-ui-react';
import {createBrowserHistory} from 'history';
import {navConsts} from '../constants';

export default class Header extends Component {
  render() {
    const {ACCOUNT, FIND, POST} = navConsts;
    const activeItem = createBrowserHistory().location.pathname.replace('/', '');

    return (
      <div className="App-header">
        <Menu >
          <Link to='/'>
            <Menu.Item header><Icon name='car' /> Spot</Menu.Item>
          </Link>
          <Link to={'/' + FIND}>
            <Menu.Item
              name={FIND}
              active={activeItem === FIND}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to={'/' + POST}>
            <Menu.Item
              name={POST}
              active={activeItem === POST}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to={'/' + ACCOUNT}>
            <Menu.Item
              name={ACCOUNT}
              active={activeItem === ACCOUNT}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu>
      </div>
    );
  }
}