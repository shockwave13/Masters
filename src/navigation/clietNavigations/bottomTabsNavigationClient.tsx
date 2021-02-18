import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EStyleSheet from 'react-native-extended-stylesheet';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {useTranslation} from 'react-i18next';
import {Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';

import ProfileStack from './profileNavigationClient';
import ServicesStack from './servicesNavigation';
import MessagingStack from './messagingNavigationClient';
import Favorites from 'screens/client/favorites';
import CalendarStack from './calendarNavigation';

import {getTabBarOptions} from 'navigation/config';
import ButtonIcon from 'components/buttons/ButtonIcon';

const Tab = createBottomTabNavigator();

const getTabBarVisible = (route: any) => {
  //const routeName = getFocusedRouteNameFromRoute(route);
  // console.log('routeName', route);
  // if (routeName === 'MyProfile' || 'MessagingList') {
  //   return true;
  // }
  // return false;

  return true;
};

const styles = EStyleSheet.create({
  calendarIconStyle: {
    width: 67,
    height: 67,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 23,
  },
  calendarIconContainerStyle: {
    padding: 10,
    backgroundColor: '$background',
    width: 85,
    height: 62,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 2,
    borderTopColor: 'rgba(250,250,250,0.5)',
    borderColor: 'rgba(150,150,150,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function BottomTabsClient() {
  const {t} = useTranslation();

  return (
    <Tab.Navigator tabBarOptions={getTabBarOptions()}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="style" color={color} size={RFValue(30)} />
          ),
          tabBarLabel: t('services'),
        }}
        name="Services"
        component={ServicesStack}
      />
      <Tab.Screen
        options={({route}) => ({
          tabBarVisible: getTabBarVisible(route),
          tabBarIcon: ({color}) => (
            <Icon name="loyalty" color={color} size={RFValue(30)} />
          ),
          tabBarLabel: t('favorites'),
        })}
        name="Favorites"
        component={Favorites}
      />
      <Tab.Screen
        options={({route}) => {
          return {
            tabBarVisible: getTabBarVisible(route),
            tabBarIcon: ({color}) => (
              <ButtonIcon
                iconName="event"
                containerIconStyle={[
                  styles.calendarIconStyle,
                  {backgroundColor: color},
                ]}
                containerStyle={styles.calendarIconContainerStyle}
              />
            ),
            tabBarLabel: '',
          };
        }}
        name="Calendar"
        component={CalendarStack}
      />
      <Tab.Screen
        options={({route}) => ({
          tabBarLabel: t('chat'),
          tabBarVisible: getTabBarVisible(route),
          tabBarIcon: ({color}) => (
            <Icon name="chat" color={color} size={RFValue(30)} />
          ),
        })}
        name="Chat"
        component={MessagingStack}
      />
      <Tab.Screen
        options={({route}) => {
          const routeName = getFocusedRouteNameFromRoute(route);

          const isTabVisible = routeName && routeName !== 'MyProfile';

          return {
            tabBarLabel: t('profile'),
            tabBarVisible: !isTabVisible,
            tabBarIcon: ({color}) => (
              <Icon name="account-box" color={color} size={RFValue(30)} />
            ),
          };
        }}
        name="Profile"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
}
