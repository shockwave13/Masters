import {Dimensions} from 'react-native';

const DEFAULT_HEIGHT = 812;
const DEFAULT_WIDTH = 375;

const sHeight = Dimensions.get('screen').height;
const sWidth = Dimensions.get('screen').width;

export const convertHeight = (
  value: number,
  screenHeight: number = sHeight,
): number => {
  const result = (value / DEFAULT_HEIGHT).toFixed(2);

  return Math.floor(+result * screenHeight);
};

export const convertWidth = (value: number, screenWidth: number = sWidth) => {
  const result = (value / DEFAULT_WIDTH).toFixed(2);

  return Math.floor(+result * screenWidth);
};
