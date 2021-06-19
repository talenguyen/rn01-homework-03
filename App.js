/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import Header from './src/components/header';
import Menu from './src/components/menu';
import CheckoutPopup from './src/components/checkoutPopup';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header />
      <Menu />
      <CheckoutPopup />
    </SafeAreaView>
  );
};

export default App;
