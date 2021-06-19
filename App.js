/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {getHorizontalSize, getVerticalSize} from './src/utilities/size';

const Images = {
  shrimpPizza: require('./src/assets/images/shrimp-pizza.png'),
};

const Item = () => (
  <View style={styles.itemContainer}>
    <View>
      <Image source={Images.shrimpPizza} style={styles.itemImage} />
    </View>
    <View style={styles.itemInfoContainer}>
      <View>
        <View style={styles.itemNameContainer}>
          <Text style={styles.itemName}>Shrimp Pizza</Text>
          <Text style={styles.itemKCal}>KCal : 475</Text>
        </View>
        <Text style={styles.itemDescription}>
          Shrimp, mushroom, cheese, tomato
        </Text>
      </View>
      <View style={styles.itemPriceContainer}>
        <Text style={styles.itemPrice}>$ 12.00</Text>
        <Text style={styles.itemListingPrice}>$ 20.00</Text>
      </View>
    </View>
  </View>
);
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.itemListContainer}>
        <Item />
        <View style={styles.divider} />
        <Item />
      </View>
    </SafeAreaView>
  );
};

console.log(getHorizontalSize(74));
const styles = StyleSheet.create({
  itemListContainer: {
    backgroundColor: '#FFF',
  },
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
  divider: {
    backgroundColor: '#EFF0F3',
    height: getVerticalSize(1),
    marginHorizontal: getHorizontalSize(24),
  },
});

export default App;
