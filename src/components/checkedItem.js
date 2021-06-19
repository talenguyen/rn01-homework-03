import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Item from './item';
import {getHorizontalSize, getVerticalSize} from '../utilities/size';

const CheckedItem = ({image, name, kCal, description, price, listingPrice}) => (
  <View>
    <Item
      image={image}
      name={name}
      kCal={kCal}
      description={description}
      price={price}
      listingPrice={listingPrice}
    />
    <View style={styles.checkedContainer}>
      <Image
        style={styles.checkedImage}
        source={require('../assets/images/checked.png')}
      />
      <Text style={styles.checkedText}>twice by you</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  checkedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getVerticalSize(-8),
    paddingBottom: getVerticalSize(6),
  },
  checkedText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#9B9B9B',
    marginLeft: getHorizontalSize(5),
  },
  checkedImage: {
    width: getHorizontalSize(11),
    height: getVerticalSize(10),
    marginLeft: getHorizontalSize(24),
  },
});

export default CheckedItem;
