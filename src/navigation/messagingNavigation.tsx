import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MessagingList from 'screens/master/messaging/MessagingList';

const Stack = createStackNavigator();

export default function MessagingStack(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="MessagingList">
      <Stack.Screen name="MessagingList" component={MessagingList} />
    </Stack.Navigator>
  );
}
