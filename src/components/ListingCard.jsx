import React, {Component} from 'react';
import {Card, Item} from 'semantic-ui-react';


/**
 * props:
 *  `imgSrc`,
 *  `header`,
 *  `meta`,
 *  `description`,
 *  `extra`,
 */
export class ListingCard extends Component {
  render() {
    return (
      <Card fluid><Card.Content>
        <Item.Group>
          <Item>
            <Item.Image src={this.props.imgSrc} />

            <Item.Content>
              <Item.Header as='a' content={this.props.header} />
              <Item.Meta content={'$' + this.props.meta} />
              <Item.Description content={this.props.description} />
              <Item.Extra content={this.props.extra} />
            </Item.Content>
          </Item>
        </Item.Group>
      </Card.Content></Card>
    );
  }
}