import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CovidMessage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only If Necessary</Text>
      <Text style={styles.text}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
};

export default CovidMessage;

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#1065e9',
      padding: 20,
      borderTopLeftRadius: 17,
      borderTopRightRadius: 17,
  },
  title: {
   color: 'white',
   fontSize: 20,
   fontWeight: 'bold',
   marginBottom: 10,
  },
  text: {
      color: '#bed9ff',
      fontSize: 15,
      marginBottom: 10,
      
  },
  learnMore: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
  },
});
