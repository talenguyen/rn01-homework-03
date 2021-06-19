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
  FlatList,
} from 'react-native';

import Item from './src/components/item';
import CheckedItem from './src/components/checkedItem';

import {getHorizontalSize, getVerticalSize} from './src/utilities/size';

const Images = {
  shrimpPizza: require('./src/assets/images/shrimp-pizza.png'),
  pinnaclePizza: require('./src/assets/images/pinnacle-pizza.png'),
  houseStokePizza: require('./src/assets/images/house-stoke-pizza.png'),
  veganPizza: require('./src/assets/images/vegan-pizza.png'),
};

const DATA = [
  {
    image: Images.shrimpPizza,
    name: 'Shrimp Pizza',
    kCal: 475,
    description: 'Shrimp, mushroom, cheese, tomato',
    price: 12,
    listingPrice: 20,
    isChecked: false,
  },
  {
    image: Images.pinnaclePizza,
    name: 'Pinnacle Pizza',
    kCal: 500,
    description: 'Luna’s howl, hush, delirium, revoker',
    price: 20,
    listingPrice: 99,
    isChecked: true,
  },
  {
    image: Images.houseStokePizza,
    name: 'House Stoke Pizza',
    kCal: 493,
    description: 'Pig, pog, pet, pird',
    price: 15,
    listingPrice: 25,
    isChecked: false,
  },
  {
    image: Images.veganPizza,
    name: 'Vegan Pizza',
    kCal: 120,
    description: 'Fake beef, soy, cheese, mushroom',
    price: 20,
    listingPrice: 33,
    isChecked: false,
  },
];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const itemSeparator = () => <View style={styles.divider} />;
  const renderItem = ({item}) => {
    const {image, name, kCal, description, price, listingPrice, isChecked} =
      item;
    if (isChecked) {
      return (
        <CheckedItem
          image={image}
          name={name}
          kCal={kCal}
          description={description}
          price={price}
          listingPrice={listingPrice}
        />
      );
    } else {
      return (
        <Item
          image={image}
          name={name}
          kCal={kCal}
          description={description}
          price={price}
          listingPrice={listingPrice}
        />
      );
    }
  };

  const keyExtractor = item => item.name;

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList
        style={styles.itemListContainer}
        data={DATA}
        //data defined in constructor
        ItemSeparatorComponent={itemSeparator}
        //Item Separator View
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemListContainer: {
    backgroundColor: '#FFF',
  },
  divider: {
    backgroundColor: '#EFF0F3',
    height: getVerticalSize(1),
    marginHorizontal: getHorizontalSize(24),
  },
});

export default App;
