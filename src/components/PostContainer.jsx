import React, {Component} from 'react';
import {Card, Container, Icon, Input, Label} from 'semantic-ui-react';

export default class PostContainer extends Component {
  render() {
    return (
      <Container className='post-container'>
        <Icon name='car' size='massive' />
        <h1>
          Post a parking spot!
        </h1>

        <Input fluid label='Description' placeholder='Spot in garage at La Scala' />
        <Input label='Price' icon iconPosition='left' placeholder='50'>
          <Label>$</Label>
          <input />
        </Input>

      </Container>
    );
  }
}