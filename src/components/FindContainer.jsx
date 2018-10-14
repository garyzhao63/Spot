import React, {Component} from 'react';
import {Icon, Item, Image} from 'semantic-ui-react';
import {ListingCard} from './ListingCard';
import ListingsContainer from './ListingsContainer';
import * as api from '../server/api';

export default class FindContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
  }

  componentDidMount() {
    api.getAllListings((listingData, error) => {
      if (error) {
        alert(error);
        return;
      }

      console.log(listingData)
      this.setState((prevState, curProps) => {
        return {listings: [...prevState.listings, listingData]}
      });
    });
  }

  render() {
    return (
      <div className='find-container'>
        <Icon name='search' size='massive' />
        <h1>
          Find a parking spot!
        </h1>

        <Item.Group>
          <ListingsContainer listings={this.state.listings}/>
        </Item.Group>

      </div>
    );
  }
}