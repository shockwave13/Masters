import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useTranslation} from 'react-i18next';

import CalendarNew from 'screens/master/calendar/CalendarNew';
import CalendarSchedule from 'screens/master/calendar/CalendarSchedule';
import CalendarClientDetail from 'screens/master/calendar/CalendarClientDetails';
import Calendar from 'screens/master/calendar';

import CalendarTabBar from 'components/headers/CalendarTabBar';
import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';

const Tab = createMaterialTopTabNavigator();

export default function CalendarNavigation() {
  const {t} = useTranslation();
  return (
    <DefaultBgImageContainer>
      <Tab.Navigator tabBar={CalendarTabBar}>
        <Tab.Screen
          name="CalendarNew"
          component={CalendarNew}
          options={{tabBarLabel: t('calendarNew')}}
        />
        <Tab.Screen
          name="CalendarSchedule"
          component={CalendarSchedule}
          options={{tabBarLabel: t('calendarSchedule')}}
        />
        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{tabBarLabel: t('calendar')}}
        />
      </Tab.Navigator>
    </DefaultBgImageContainer>
  );
}
