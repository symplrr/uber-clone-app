import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {Auth} from 'aws-amplify';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <View style={styles.userRowContainer}>
          <View style={styles.userRow} />
          <View>
            <Text style={styles.nameText}>Vadim Savin</Text>
            <Text style={styles.moneyText}>5.00 *</Text>
          </View>
        </View>

        <View style={styles.messagesRow}>
          <Pressable>
            <Text style={styles.makeMoneyText}>Messages</Text>
          </Pressable>
        </View>

        <Pressable>
          <Text style={styles.accountText}>Do more with your account</Text>
        </Pressable>

        <Pressable>
          <Text style={styles.makeMoneyText}>Make Money Driving</Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />

      <Pressable onPress= {Auth.signOut()}>
          <Text style={styles.logOutButton}>Log Out</Text>
        </Pressable>

    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: 'black',
    padding: 15,
  },
  makeMoneyText: {
    color: 'white',
    paddingVertical: 5,
  },
  accountText: {
    color: '#dddddd',
    paddingVertical: 5,
  },
  messagesRow: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#eee',
    borderTopColor: '#eee',
    paddingVertical: 4,
    marginVertical: 10,
  },
  userRow: {
    backgroundColor: '#cacaca',
    width: 45,
    height:45,
    borderRadius: 55,
  },
  userRowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  nameText: {
      color: 'white',
      fontSize: 25,
  },
  moneyText: {
    color: 'lightgrey',
    fontSize: 18,
  },
  logOutButton: {
    color: 'lightgrey',
    fontSize: 18,
    padding: 5,
    paddingLeft: 20,
  }
});
