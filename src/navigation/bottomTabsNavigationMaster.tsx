import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';

import ProfileStack from './profileNavigation';
import MessagingStack from './messagingNavigation';
import Clients from 'screens/master/clients';
import EStyleSheet from 'react-native-extended-stylesheet';
import CalendarNavigation from './calendarNavigation';

import {getTabBarOptions} from './config';

const Tab = createBottomTabNavigator();

export default function BottomTabsMaster() {
  const {t} = useTranslation();
  const backgroundColor = EStyleSheet.value('$background');
  return (
    <View style={{flex: 1, backgroundColor}}>
      <Tab.Navigator tabBarOptions={getTabBarOptions()}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="event" color={color} size={RFValue(30)} />
            ),
            tabBarLabel: t('calendar'),
          }}
          name="Calendar"
          component={CalendarNavigation}
        />
        <Tab.Screen
          options={({route}) => ({
            tabBarIcon: ({color}) => (
              <Icon name="loyalty" color={color} size={RFValue(30)} />
            ),
            tabBarLabel: t('clients'),
          })}
          name="Clients"
          component={Clients}
        />
        <Tab.Screen
          options={({route}) => ({
            tabBarLabel: t('chat'),

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
    </View>
  );
}
