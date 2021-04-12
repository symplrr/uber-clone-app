import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import HomeMap from '../../components/HomeMap/index';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes/UberTypes';

const SelectRide = () => {
  return (
    <View style={{ display: 'flex', justifyContent: 'space-between' }}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap />
      </View>

      <View style={{height: 400}}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SelectRide;

const styles = StyleSheet.create({});
