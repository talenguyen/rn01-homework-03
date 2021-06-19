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
  FlatList,
} from 'react-native';

import {getHorizontalSize, getVerticalSize} from './src/utilities/size';

const Images = {
  shrimpPizza: require('./src/assets/images/shrimp-pizza.png'),
  pinnaclePizza: require('./src/assets/images/pinnacle-pizza.png'),
  houseStokePizza: require('./src/assets/images/house-stoke-pizza.png'),
  veganPizza: require('./src/assets/images/vegan-pizza.png'),
  checked: require('./src/assets/images/checked.png'),
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
      <Image style={styles.checkedImage} source={Images.checked} />
      <Text style={styles.checkedText}>twice by you</Text>
    </View>
  </View>
);

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
  divider: {
    backgroundColor: '#EFF0F3',
    height: getVerticalSize(1),
    marginHorizontal: getHorizontalSize(24),
  },
});

export default App;
