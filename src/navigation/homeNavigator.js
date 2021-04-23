import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreens';
import { createStackNavigator } from '@react-navigation/stack';
import DestinationSearchScreen from '../screens/DestinationSearch';
import SelectRide from '../screens/SelectRide';

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen
        name={'DestinationSearch'}
        component={DestinationSearchScreen}
      />
      <Stack.Screen name={'SelectRide'} component={SelectRide} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
