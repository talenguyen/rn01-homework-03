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
  useColorScheme,
  StyleSheet,
  View,
} from 'react-native';

import Header from './src/components/header';
import Tabs from './src/components/tabs';
import Menu from './src/components/menu';
import CheckoutPopup from './src/components/checkoutPopup';
import {getVerticalSize} from './src/utilities/size';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header />
      <Tabs />
      <View style={styles.separator} />
      <Menu />
      <CheckoutPopup />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#EFF0F3',
    height: getVerticalSize(1),
  },
});
export default App;
