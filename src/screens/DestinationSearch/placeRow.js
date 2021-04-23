import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

const placeRow = ({ data }) => {

  const getIconStyle = (dataDes) => {
    if(dataDes === 'Home'){
      return <Entypo name="home" size={24} color="white" />;
    } else if(dataDes === 'Work'){
      return  <MaterialIcons name="home-work" size={24} color="white" />;
    } else {
      return <Entypo name="location-pin" size={24} color="white" />;
    }
  };

  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        {getIconStyle(data.description)}
      </View>
      <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
    </View>
  );
};

export default placeRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 20,
  },
  locationText: {},
});
