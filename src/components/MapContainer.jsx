import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import marker from '../marker.png';
import * as api from '../server/api';
 
const AnyReactComponent = ({ text }) => <div><img src={marker} width='20' />{text}</div>;
 
class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
  }

  static defaultProps = {
    center: {
      lat: 32.8801,
      lng: -117.2340
    },
    zoom: 11
  };

    componentDidMount() {
    api.getAllListings((listingData, error) => {
      if (error) {
        alert(error);
        return;
      }

      this.setState((prevState, curProps) => {
        return {listings: [...prevState.listings, listingData]}
      });
    });
  }

 
  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB76P1B4Bv1YhfQtiSqXI1BNhNJd2ZqrF4'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >


          {this.state.listings.map((listing) => (
            <AnyReactComponent
              lat={listing.latitude}
              lng={listing.longitude}
              onClick={() => alert('hello')}
            />
          ))}


        </GoogleMapReact>
      </div>
    );
  }
}
export default MapContainer;