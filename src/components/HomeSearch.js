import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeSearch = (props) => {
  const navigation = useNavigation();
  const gotToSearch = () => {
    navigation.navigate('DestinationSearch');
  };

  return (
    <View>
      <Pressable onPress={gotToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Where to?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={24} color="black" />
          <Text>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
      </Pressable>

      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name="clockcircle" size={24} color="yellow" />
        </View>
        <Text style={styles.destinationText}>Spin NightClub</Text>
      </View>

      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: 'lightblue' }]}>
          <MaterialIcons name="home" size={24} color="black" />
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: 'lightgrey',
    margin: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 17,
    padding: 10,
  },
  inputText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6e6e6e',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#b3b3b3',
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 20,
    fontWeight: '500',
    fontSize: 18,
  },
});
