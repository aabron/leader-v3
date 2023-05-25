import React, { Component } from 'react';
import {Map, GoogleApiWrapper } from 'google-maps-react';
import {ReactComponent as HomeIcon} from '../images/home-simple.svg';
import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "google-maps-react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

var service;

const mapStyles = {
  width: '90%',
  height: '50%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    );
  }
}


export default GoogleApiWrapper({
  apiKey: process.env.API_KEY
})(MapContainer);