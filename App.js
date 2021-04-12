import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreens/index';
import DestinationSearchScreen from "./src/screens/DestinationSearch/index";
import SelectRide from './src/screens/SelectRide/index';


export default function App() {
  return (
    <>
    {/* <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Ionicons  name="md-checkmark-circle" size={32} color="green" />
    </View> */}
    {/* <HomeScreen /> */}
    {/* <DestinationSearchScreen /> */}
    <SelectRide />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
