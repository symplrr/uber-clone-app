import React from 'react';
import { Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = ({ origin, destination }) => {
  const originLocation = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };
  console.log(origin);
  console.log(destination);

  const destinationLocation = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
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
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
    >
      <MapViewDirections
        origin={originLocation}
        destination={destinationLocation}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={6}
        strokeColor="black"
      />
      <Marker coordinate={originLocation} title={'Origin'} />
      <Marker coordinate={destinationLocation} title={'Destination'} />
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
