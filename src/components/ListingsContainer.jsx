import React, {Component} from 'react';
import {Button, Icon, Image} from 'semantic-ui-react';
import {ListingCard} from './ListingCard';
import * as networking from '../networking';

export default class ListingsContainer extends Component {
  requestButton = (listing) => (
    <Button primary floated='right' onClick={() => {
        alert('Request sent!');
        networking.requestDocuSign(listing.email, listing.userName, listing.title, (response, error) => {});
      }}>
      Request
          <Icon name='right chevron' />
    </Button>
  );

  render() {
    const imgPlaceholder = 'https://react.semantic-ui.com/images/wireframe/image.png';
    const descriptionPlaceholder = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />;

    return (
      this.props.listings.map((listing) => (
        <ListingCard
          key={listing.title}
          header={listing.title}
          meta={listing.price}
          imgSrc={(listing.latitude && listing.latitude)
            ? "https://maps.googleapis.com/maps/api/staticmap?center=" + listing.latitude + "," + listing.longitude + "&zoom=14&size=400x300&key=AIzaSyD-X42BKQuA-ao5n2sNFbaz0vQabOkRX0s"
            : imgPlaceholder
          }
          description={listing.description ? listing.description : descriptionPlaceholder}
          extra={this.requestButton(listing)}
        />
      ))
    );
  }
}