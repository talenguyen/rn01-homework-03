import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

import {getHorizontalSize, getVerticalSize} from '../utilities/size';

const CheckoutPopup = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../assets/images/chevron-left.png')}
      />
      <Text style={styles.title}>Pizzon - Crib Ln</Text>
      <Image
        style={styles.icon}
        source={require('../assets/images/heart.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: getVerticalSize(12),
    paddingHorizontal: getHorizontalSize(24),
  },
  title: {
    fontSize: 20,
    marginTop: getVerticalSize(2),
    fontWeight: '500',
    color: '#4F585E',
  },
  icon: {
    width: getHorizontalSize(24),
    height: getHorizontalSize(24),
  },
});

export default CheckoutPopup;
