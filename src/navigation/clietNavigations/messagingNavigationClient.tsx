import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MessagingList from 'screens/client/messaging/MessagingList';
import MessagingChat from 'screens/client/messaging/MessagingChat';

const Stack = createStackNavigator();

export default function MessagingStack(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="MessagingList">
      <Stack.Screen name="MessagingList" component={MessagingList} />
      <Stack.Screen name="MessagingChat" component={MessagingChat} />
    </Stack.Navigator>
  );
}
