import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from 'screens/client/profile/Profile';
import ProfileSettings from 'screens/client/profile/ProfileSettings';
import ProfileChangePassword from 'screens/client/profile/ProfileChangePassword';
import ProfileNotificationSettings from 'screens/client/profile/ProfileNotificationSettings';
import ProfileEdit from 'screens/client/profile/ProfileEdit';

const Stack = createStackNavigator();

export default function ProfileStack(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyProfile" component={Profile} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
      <Stack.Screen
        name="ProfileChangePassword"
        component={ProfileChangePassword}
      />
      <Stack.Screen
        name="ProfileNotificationSettings"
        component={ProfileNotificationSettings}
      />
    </Stack.Navigator>
  );
}
