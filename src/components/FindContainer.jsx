import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';
import Map from './Map';
export default class FindContainer extends Component {
  render() {
    return (
      <div>
        <Icon name='search' size='massive' />
        <h1>
          Find a parking spot!
        </h1>
        <Map app_id="0oHLrrBaFtSTH3oYJIys" app_code="bybIdk8HKeTs9Td__oGTwQ" />
      </div>
    );
  }
}