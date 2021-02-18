import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MyProfile from 'screens/master/profile/Profile';
import EditProfileAndServices from 'screens/master/profile/EditProfileAndServices';
import WorkingTime from 'screens/master/profile/WorkingTime';
import WeeklySchedule from 'screens/master/profile/WeeklySchedule';
import ProfileMonthlySchedule from 'screens/master/profile/ProfileMonthlySchedule';
import ProfileSettings from 'screens/master/profile/ProfileSettings';
import ProfileChangePassword from 'screens/master/profile/ProfileChangePassword';
import ProfileNotificationSettings from 'screens/master/profile/ProfileNotificationSettings';
import ProfilePremiumPackage from 'screens/master/profile/ProfilePremiumPackage';
import ProfileServicesSection from 'screens/master/profile/ProfileServicesSection';
import ProfileServiceEditing from 'screens/master/profile/ProfileServiceEditing';

const Stack = createStackNavigator();

export default function ProfileStack(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="MyProfile">
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen
        name="EditProfileAndServices"
        component={EditProfileAndServices}
      />
      <Stack.Screen name="WorkingTime" component={WorkingTime} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
      <Stack.Screen name="WeeklySchedule" component={WeeklySchedule} />
      <Stack.Screen
        name="ProfilePremiumPackage"
        component={ProfilePremiumPackage}
      />
      <Stack.Screen
        name="ProfileNotificationSettings"
        component={ProfileNotificationSettings}
      />
      <Stack.Screen
        name="ProfileChangePassword"
        component={ProfileChangePassword}
      />
      <Stack.Screen
        name="ProfileMonthlySchedule"
        component={ProfileMonthlySchedule}
      />
      <Stack.Screen
        name="ProfileServicesSection"
        component={ProfileServicesSection}
      />
      <Stack.Screen
        name="ProfileServiceEditing"
        component={ProfileServiceEditing}
      />
    </Stack.Navigator>
  );
}
