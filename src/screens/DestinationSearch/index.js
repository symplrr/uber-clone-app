import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationSearchScreen = (props) => {
  const [originalPlace, setOriginalPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setOriginalPlace({ data, details });
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDwxMrKj8nMsffZfLobd55CXNZ4E - SxpIM',
            language: 'en',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace({ data, details });
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDwxMrKj8nMsffZfLobd55CXNZ4E - SxpIM',
            language: 'en',
          }}
        />
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
  },
  textInput: {
    height: 50,
    backgroundColor: '#eeeeee',
    marginVertical: 5,
    borderRadius: 7,
    paddingLeft: 10,
  },
});
