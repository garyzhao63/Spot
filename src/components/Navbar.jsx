import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item header>Spot</Menu.Item>
        <Menu.Item
          name='find'
          active={activeItem === 'find'}
          onClick={this.handleItemClick}
        />
        <Menu.Item name='post' active={activeItem === 'post'} onClick={this.handleItemClick} />
        <Menu.Item
          name='account'
          active={activeItem === 'account'}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}