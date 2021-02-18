import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Services from 'screens/client/services';
import ServicesSearchFilters from 'screens/client/services/ServicesSearchFilters';
import ServicesMastersFilteredList from 'screens/client/services/ServicesMastersFilteredList';
import ServicesLocationCityFilter from 'screens/client/services/ServicesLocationCityFilter';
import ServicesLocationDistrictFilter from 'screens/client/services/ServicesLocationDistrictFilter';
import ServicesMasterDetails from 'screens/client/services/ServicesMasterDetails';
import ServicesFullList from 'screens/client/services/ServicesFullList';
import ServicesResponsesFullList from 'screens/client/services/ServicesResponsesFullList';
import ServicesCreateResponse from 'screens/client/services/ServicesCreateResponse';
import ServicesAboutService from 'screens/client/services/ServicesAboutService';
import ServicesMakeAppointment from 'screens/client/services/ServicesMakeAppointment';

const Stack = createStackNavigator();

export default function ServicesStack(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Services" component={Services} />
      {/* <Stack.Screen name="ServicesList" component={ServicesList} /> */}
      <Stack.Screen
        name="ServicesSearchFilters"
        component={ServicesSearchFilters}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name="ServicesLocationFilter"
        component={ServicesLocationCityFilter}
      />
      <Stack.Screen
        name="ServicesLocationDistrictFilter"
        component={ServicesLocationDistrictFilter}
      />
      <Stack.Screen
        name="ServicesMastersFilteredList"
        component={ServicesMastersFilteredList}
      />
      <Stack.Screen
        name="ServicesMasterDetails"
        component={ServicesMasterDetails}
      />
      <Stack.Screen name="ServicesFullList" component={ServicesFullList} />
      <Stack.Screen
        name="ServicesResponsesFullList"
        component={ServicesResponsesFullList}
      />
      <Stack.Screen
        name="ServicesCreateResponse"
        component={ServicesCreateResponse}
      />
      <Stack.Screen
        name="ServicesAboutService"
        component={ServicesAboutService}
      />
      <Stack.Screen
        name="ServicesMakeAppointment"
        component={ServicesMakeAppointment}
      />
    </Stack.Navigator>
  );
}
