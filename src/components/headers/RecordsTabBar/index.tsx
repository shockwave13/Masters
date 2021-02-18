import React from 'react';
import {View, Pressable, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {
  CommonActions,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';

import DefaultHeader from 'components/headers/DefaultHeader';

import fonts from 'constants/fonts';

function CalendarTabBar({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) {
  const {routes, index: activeScreen} = state;

  const screenName = getFocusedRouteNameFromRoute(routes[state.index]);

  const onBack = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: activeScreen,
        routes: [{name: 'ActiveRecords'}, {name: 'ArchiveRecords'}],
      }),
    );
  };

  return screenName !== 'DetailRecord' ? (
    <View>
      <DefaultHeader dontUseLeftIcon title={'Записи'} />
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
      <View style={styles.bodyPlaceholderStyle} />
    </View>
  ) : (
    <View>
      <DefaultHeader title="Записи" onPressIcon={onBack} />
      <View style={styles.bodyPlaceholderStyle} />
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
  bodyPlaceholderStyle: {
    height: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '$background',
  },
});

export default CalendarTabBar;
