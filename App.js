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
  SectionList,
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
    title: 'Special Delivery',
    data: [
      {
        id: 1,
        image: Images.shrimpPizza,
        name: 'Shrimp Pizza',
        kCal: 475,
        description: 'Shrimp, mushroom, cheese, tomato',
        price: 12,
        listingPrice: 20,
        isChecked: false,
      },
      {
        id: 2,
        image: Images.pinnaclePizza,
        name: 'Pinnacle Pizza',
        kCal: 500,
        description: 'Luna’s howl, hush, delirium, revoker',
        price: 20,
        listingPrice: 99,
        isChecked: true,
      },
      {
        id: 3,
        image: Images.houseStokePizza,
        name: 'House Stoke Pizza',
        kCal: 493,
        description: 'Pig, pog, pet, pird',
        price: 15,
        listingPrice: 25,
        isChecked: false,
      },
      {
        id: 4,
        image: Images.veganPizza,
        name: 'Vegan Pizza',
        kCal: 120,
        description: 'Fake beef, soy, cheese, mushroom',
        price: 20,
        listingPrice: 33,
        isChecked: false,
      },
    ],
  },
  {
    title: 'Hot Deals',
    data: [
      {
        id: 5,
        image: Images.shrimpPizza,
        name: 'Shrimp Pizza',
        kCal: 475,
        description: 'Shrimp, mushroom, cheese, tomato',
        price: 12,
        listingPrice: 20,
        isChecked: false,
      },
      {
        id: 6,
        image: Images.pinnaclePizza,
        name: 'Pinnacle Pizza',
        kCal: 500,
        description: 'Luna’s howl, hush, delirium, revoker',
        price: 20,
        listingPrice: 99,
        isChecked: true,
      },
      {
        id: 7,
        image: Images.houseStokePizza,
        name: 'House Stoke Pizza',
        kCal: 493,
        description: 'Pig, pog, pet, pird',
        price: 15,
        listingPrice: 25,
        isChecked: false,
      },
      {
        id: 8,
        image: Images.veganPizza,
        name: 'Vegan Pizza',
        kCal: 120,
        description: 'Fake beef, soy, cheese, mushroom',
        price: 20,
        listingPrice: 33,
        isChecked: false,
      },
    ],
  },
];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

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

  const keyExtractor = item => item.id;

  const itemSeparator = () => <View style={styles.separator} />;
  const renderSectionFooter = () => {
    return <View style={styles.sectionFooter} />;
  };
  const renderSectionHeader = ({section: {title}}) => (
    <Text style={styles.header}>{title}</Text>
  );

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SectionList
        sections={DATA}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparator}
        renderSectionHeader={renderSectionHeader}
        renderSectionFooter={renderSectionFooter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemListContainer: {
    backgroundColor: '#FFF',
  },
  separator: {
    backgroundColor: '#EFF0F3',
    height: getVerticalSize(1),
    marginHorizontal: getHorizontalSize(24),
  },
  sectionFooter: {
    backgroundColor: '#EFF0F3',
    height: getVerticalSize(5),
  },
  header: {
    backgroundColor: '#FFF',
    fontSize: 20,
    fontWeight: '500',
    paddingHorizontal: getHorizontalSize(24),
    paddingTop: getVerticalSize(24),
    paddingBottom: getVerticalSize(8),
  },
});

export default App;
