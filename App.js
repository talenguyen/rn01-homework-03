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
  Image,
  Text,
} from 'react-native';

import Menu from './src/components/menu';
import {
  getHorizontalSize,
  getVerticalSize,
  windowWidth,
} from './src/utilities/size';

const CheckoutPopup = () => {
  return (
    <View style={styles.checkoutPopupContainer}>
      <View style={styles.checkoutPopupLeft}>
        <Image
          style={styles.cart}
          source={require('./src/assets/images/cart.png')}
        />
        <View>
          <Text style={styles.checkoutItemCount}>Checkout - 1 items</Text>
          <Text style={styles.checkoutName}>Pizzon - Crib Ln</Text>
        </View>
      </View>
      <Image
        style={styles.close}
        source={require('./src/assets/images/x.png')}
      />
    </View>
  );
};
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Menu />
      <CheckoutPopup />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  checkoutPopupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: getVerticalSize(50),
    marginHorizontal: getHorizontalSize(32),
    width: windowWidth - 2 * getHorizontalSize(32),
    backgroundColor: '#FFF',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 32,
  },
  checkoutPopupLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cart: {
    width: getHorizontalSize(30),
    height: getHorizontalSize(30),
    marginHorizontal: getHorizontalSize(12),
    marginVertical: getVerticalSize(13),
  },
  close: {
    margin: getHorizontalSize(8),
    width: getHorizontalSize(14),
    height: getHorizontalSize(14),
  },
  checkoutItemCount: {
    fontSize: 12,
    fontWeight: '500',
    color: '#9B9B9B',
  },
  checkoutName: {
    fontSize: 16,
    marginTop: getVerticalSize(2),
    fontWeight: '600',
    color: '#4F585E',
  },
});

export default App;
