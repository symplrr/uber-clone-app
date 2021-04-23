import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './placeRow';
import { useNavigation } from '@react-navigation/native';

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearchScreen = (props) => {
  const [originalPlace, setOriginalPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originalPlace && destinationPlace) {
      navigation.navigate('SelectRide', {
        originalPlace,
        destinationPlace,
      });
    }
  };

  useEffect(() => {
    checkNavigation();
  }, [originalPlace, destinationPlace, checkNavigation]);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setOriginalPlace({ data, details });
          }}
          enablePoweredByContainer={false}
          currentLocation={true}
          currentLocationLabel="Current Location"
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: styles.gPacontainer1,
            listView: {
              position: 'absolute',
              top: 125,
            },
            separator: styles.seperatorStyle,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDwxMrKj8nMsffZfLobd55CXNZ4E - SxpIM',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          predefinedPlaces={[homePlace, workPlace]}
          renderDescription={(data) => data.description || data.vicinity}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace({ data, details });
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: styles.gPacontainer2,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDwxMrKj8nMsffZfLobd55CXNZ4E - SxpIM',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />

        <View style={styles.circle}></View>

        <View style={styles.line}></View>

        <View style={styles.square}></View>
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearchScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  container: {
    padding: 10,
    height: '100%',
    // position: 'absolute',
    // top: 20,
    // left: 10,
    // right: 10,
  },
  gPacontainer1: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
  },
  gPacontainer2: {
    position: 'absolute',
    top: 75,
    left: 10,
    right: 10,
  },
  textInput: {
    height: 50,
    backgroundColor: '#eeeeee',
    marginVertical: 5,
    borderRadius: 7,
    paddingLeft: 10,
    marginLeft: 20,
  },
  seperatorStyle: {
    backgroundColor: '#bababa',
    height: 1,
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    left: 12,
    borderRadius: 5,
    top: 35,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 102,
    left: 12,
  },
  line: {
    width: 1,
    height: 61.5,
    backgroundColor: '#919191',
    position: 'absolute',
    top: 40,
    left: 14,
  },
});
