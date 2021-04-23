import 'react-native-gesture-handler';
import {StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import {usePermissions} from 'expo-permissions'
import Router from './src/navigation/root';
import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify from "aws-amplify";
import awsExports from "./src/aws-exports";
Amplify.configure(awsExports);


 function App() {

  const [permission, askForPermission] = usePermissions(Permissions.LOCATION, { ask: true });

  if (!permission || permission.status !== 'granted') {
    return (
      <View>
        <Text>Permission is not granted</Text>
        <Button title="Grant permission" onPress={askForPermission} />
        </View>
    )
  } 
  return (
    <>
      <StatusBar style="auto" />
    <Router />
    </>
  );
}

export default withAuthenticator(App);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
