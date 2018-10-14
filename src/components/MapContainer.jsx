import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import marker from '../marker.png';
 
const AnyReactComponent = ({ text }) => <div><img src={marker} width='20' />{text}</div>;
 
class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 32.8801,
      lng: -117.2340
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB76P1B4Bv1YhfQtiSqXI1BNhNJd2ZqrF4'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={32.8801}
            lng={-117.2340}
          />

          <AnyReactComponent
            lat={32.8709}
            lng={-117.2108}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default MapContainer;