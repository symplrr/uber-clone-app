import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import HomeMap from '../../components/HomeMap/index';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';
import types from '../../../assets/data/types';

const HomeScreen = (props) => {


  return (
    <View>
      <View style={{ height: Dimensions.get('window').height - 470 }}>
        <HomeMap />
      </View>

      <CovidMessage />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
