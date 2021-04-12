import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

const HomeMap = (props) => {
  return (
    <View>
      <Text></Text>
      <MapView
        initialRegion={{
          latitude: 37.38832,
          longitude: -122.4332,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({});
