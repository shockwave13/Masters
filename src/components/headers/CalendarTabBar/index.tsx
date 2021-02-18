import React from 'react';
import {View, Pressable, Text} from 'react-native';

import DefaultHeader from '../DefaultHeader';
import EStyleSheet from 'react-native-extended-stylesheet';
import fonts from 'constants/fonts';

interface ITabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
  position: any;
}

function CalendarTabBar({
  state,
  descriptors,
  navigation,
  position,
}: ITabBarProps) {
  const {routes} = state;
  return (
    <View>
      <DefaultHeader dontUseLeftIcon title={'Календарь'} />
      <View style={styles.tabContainer}>
        {routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={index.toString()}
              onPress={onPress}
              style={
                isFocused
                  ? styles.activeItemTabContainer
                  : styles.itemTabContainer
              }>
              <Text style={isFocused ? styles.activeLabelTab : styles.labelTab}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  itemTabContainer: {
    backgroundColor: 'white',
    height: 28,
    flex: 1,
    marginHorizontal: 7.5,
    borderRadius: 10,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeItemTabContainer: {
    backgroundColor: '$primary',
    height: 28,
    flex: 1,
    marginHorizontal: 7.5,
    borderRadius: 10,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelTab: {
    fontFamily: fonts.robotoReguluar,
    fontSize: 13,
    lineHeight: 20,
  },
  activeLabelTab: {
    fontFamily: fonts.robotoReguluar,
    fontSize: 13,
    lineHeight: 20,
    color: 'white',
  },
});

export default CalendarTabBar;
