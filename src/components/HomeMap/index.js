import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import cars from '../../../assets/data/cars';

const HomeMap = (props) => {

  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../../assets/images/top-Comfort.png');
    }
    if (type === 'UberXL') {
      return require('../../../assets/images/top-UberXL.png');
    }
  };

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
      {cars.map((car) => (
        <Marker
          key={Math.random()}
          coordinate={{
            latitude: car.latitude,
            longitude: car.longitude,
          }}
        >
          <Image
            style={{ width: 80, height: 80, resizeMode: 'contain' }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

// const styles = {
//   height: 400,
//   backgroundColor: 'grey',
//   justifyContent: 'center',
//   alignItems: 'center',
// };

export default HomeMap;
