import {Dimensions} from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
const designWidth = 375;
const designHeigh = 812;
const horizontalRatio = windowWidth / designWidth;
const verticalRatio = windowHeight / designHeigh;

export const getHorizontalSize = size => size * horizontalRatio;
export const getVerticalSize = size => size * verticalRatio;
