import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UberTypeRow = (props) => {
  const { type } = props;

  const getImage = () => {
    if (type.type === 'UberX') {
      return require('../../../assets/images/UberX.jpeg');
    }
    if (type.type === 'Comfort') {
      return require('../../../assets/images/Comfort.jpeg');
    }
    if (type.type === 'UberXL') {
      return require('../../../assets/images/UberXL.jpeg');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={getImage()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}
          <Ionicons name={'person'} size={16} />3
        </Text>
        <Text style={styles.time}>8:03 drop off</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </View>
  );
};

export default UberTypeRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  type: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  time: {
    color: '#5d5d5d',
  },
  rightContainer: {
    width: 100,
    //   alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
});
