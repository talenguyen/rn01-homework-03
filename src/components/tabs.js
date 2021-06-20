import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';

import {getHorizontalSize, getVerticalSize} from '../utilities/size';

const Tabs = ({tabs, onPress}) => {
  const [selectedItem, setSelectedItem] = useState(tabs[0]);
  const renderNormalItem = title => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };
  const renderActiveItem = title => {
    return (
      <View style={styles.item}>
        <Text style={styles.titleActive}>{title}</Text>
        <View style={styles.dot} />
      </View>
    );
  };
  const renderItem = ({item}) => {
    const onItemPress = () => {
      setSelectedItem(item);
      onPress(item);
    };
    const itemView =
      item === selectedItem ? renderActiveItem(item) : renderNormalItem(item);
    return (
      <TouchableOpacity onPress={onItemPress}>{itemView}</TouchableOpacity>
    );
  };
  const keyExtractor = item => item;
  const itemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      style={styles.container}
      horizontal={true}
      data={tabs}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={itemSeparator}
      ListHeaderComponent={itemSeparator}
      ListFooterComponent={itemSeparator}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  separator: {
    width: getHorizontalSize(24),
  },
  item: {
    alignItems: 'center',
    height: getVerticalSize(70),
    paddingTop: getVerticalSize(24),
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#C3C3C3',
  },
  titleActive: {
    fontSize: 15,
    fontWeight: '600',
    color: '#4F585E',
  },
  dot: {
    width: getHorizontalSize(8),
    height: getHorizontalSize(8),
    backgroundColor: '#FB6D3B',
    borderRadius: getHorizontalSize(4),
    marginTop: getVerticalSize(4),
  },
});

export default Tabs;
