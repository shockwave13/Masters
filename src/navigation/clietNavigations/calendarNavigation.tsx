import React, {ReactElement} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import ActiveRecords from 'screens/client/calendar/CalendarActive';
import ArchiveRecords from 'screens/client/calendar/CalendarArchive';
import DetailRecord from 'screens/client/calendar/CalendarAppointment';

import DefaultBgImageContainer from 'components/containers/DefaultBgImageContainer';
import RecordsTabBar from '../../components/headers/RecordsTabBar';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const ActiveRecordsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="ActiveRecords" component={ActiveRecords} />
      <Stack.Screen name="DetailRecord" component={DetailRecord} />
    </Stack.Navigator>
  );
};

const ArchiveRecordsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ArchiveRecords" component={ArchiveRecords} />
      <Stack.Screen name="DetailRecord" component={DetailRecord} />
    </Stack.Navigator>
  );
};

export default function CalendarStack(): ReactElement {
  return (
    <DefaultBgImageContainer>
      <Tab.Navigator tabBar={RecordsTabBar}>
        <Tab.Screen
          name="ActiveRecords"
          component={ActiveRecordsStack}
          options={{
            tabBarLabel: 'Актуальные',
          }}
        />
        <Tab.Screen
          name="ArchiveRecords"
          component={ArchiveRecordsStack}
          options={{
            tabBarLabel: 'Архивные',
          }}
        />
      </Tab.Navigator>
    </DefaultBgImageContainer>
  );
}
