import React from 'react';
import { Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = (props) => {
  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };

  const destination = {
    latitude: 28.487627,
    longitude: -16.285045,
  };

  const GOOGLE_MAPS_APIKEY = 'AIzaSyDwxMrKj8nMsffZfLobd55CXNZ4E - SxpIM';

  return (
    <MapView
      style={{
        height: '100%',
        width: '100%',
      }}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
    >
      <MapViewDirections 
      origin={origin} 
      destination={destination} 
      apikey={GOOGLE_MAPS_APIKEY} 
      strokeWidth = {6}
      strokeColor = 'black'
      />
      <Marker 
      coordinate={origin}
      title={'Origin'}
      />
      <Marker 
      coordinate={destination}
      title={'Destination'}
      />
    </MapView>
  );
};

// const styles = {
//   height: 400,
//   backgroundColor: 'grey',
//   justifyContent: 'center',
//   alignItems: 'center',
// };

export default RouteMap;
