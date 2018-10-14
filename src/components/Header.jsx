import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const FIND = 'find';
const POST = 'post';
const ACCOUNT = 'account';

export default class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="App-header">
        <Menu >
          <Link to='/'>
            <Menu.Item header>Spot</Menu.Item>
          </Link>
          <Link to='/find'>
            <Menu.Item
              name={FIND}
              active={activeItem === FIND}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to='/post'>
            <Menu.Item
              name={POST}
              active={activeItem === POST}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to='/account'>
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