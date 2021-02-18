import EStyleSheet from 'react-native-extended-stylesheet';
import {BottomTabBarOptions} from '@react-navigation/bottom-tabs';

import colors from 'constants/colors';

export const getTabBarOptions = (): BottomTabBarOptions => {
  return {
    inactiveBackgroundColor: colors.White,
    activeBackgroundColor: colors.White,
    activeTintColor: colors.Primary,
    inactiveTintColor: colors.IconGray,
    style: {
      //position: 'absolute',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 8,
      backgroundColor: 'white',
      height: EStyleSheet.value('$appHeight.$h95'),
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    },
    tabStyle: {
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
  };
};
