import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import UberTypeRow from './UberTypeRow';
import typesData from '../../../assets/data/types';

const UberTypes = (props) => {

    const confirmRide = () => {

    };

  return (
    <View key={Math.random()}>
      {typesData.map((type) => (
        <UberTypeRow key={Math.random()} type={type} />
      ))}

      <Pressable onPress={confirmRide} style={styles.press}>
          <Text style={styles.confirmText}>
              Confirm Uber
          </Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;

const styles = StyleSheet.create({
    press: {
        
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        alignItems: 'center',
    },
    confirmText: {
        color: 'white',
        fontWeight: 'bold',
    }
});
