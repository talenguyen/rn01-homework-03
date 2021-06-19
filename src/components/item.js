import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import {getHorizontalSize, getVerticalSize} from '../utilities/size';

const Item = ({image, name, kCal, description, price, listingPrice}) => (
  <View style={styles.itemContainer}>
    <View>
      <Image source={image} style={styles.itemImage} />
    </View>
    <View style={styles.itemInfoContainer}>
      <View>
        <View style={styles.itemNameContainer}>
          <Text style={styles.itemName}>{name}</Text>
          <Text style={styles.itemKCal}>KCal : {kCal}</Text>
        </View>
        <Text style={styles.itemDescription}>{description}</Text>
      </View>
      <View style={styles.itemPriceContainer}>
        <Text style={styles.itemPrice}>$ {price.toFixed(2)}</Text>
        <Text style={styles.itemListingPrice}>$ {listingPrice.toFixed(2)}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: getHorizontalSize(24),
    paddingVertical: getVerticalSize(16),
  },
  itemInfoContainer: {
    justifyContent: 'space-between',
    marginLeft: getHorizontalSize(16),
  },
  itemImage: {
    width: getHorizontalSize(74),
    height: getHorizontalSize(74),
  },
  itemNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: getHorizontalSize(8),
  },
  itemKCal: {
    fontSize: 12,
    fontWeight: '500',
  },
  itemDescription: {
    fontSize: 12,
    fontWeight: '500',
    color: '#9B9B9B',
    marginTop: getVerticalSize(4),
  },
  itemPrice: {
    fontSize: 16,
    color: '#FB6D3B',
  },
  itemListingPrice: {
    fontSize: 12,
    fontWeight: '500',
    color: '#9B9B9B',
    textDecorationLine: 'line-through',
    marginLeft: getHorizontalSize(16),
  },
});

export default Item;
