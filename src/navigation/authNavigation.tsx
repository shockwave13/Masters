import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//import Auth from 'screens/auth';
import SignUp from 'screens/auth/SignUp';
import SignIn from 'screens/auth/SignIn';
import ForgotPassword from 'screens/auth/ForgotPassword';
import ConfirmSignUp from 'screens/auth/ConfirmSignUp';

import Activities from 'screens/auth/SignUpMaster/Activities';
import Profession from 'screens/auth/SignUpMaster/Profession';
import WorkAddress1 from 'screens/auth/SignUpMaster/work-address/Step1';
import WorkAddress2 from 'screens/auth/SignUpMaster/work-address/Step2';
import WorkAddress3 from 'screens/auth/SignUpMaster/work-address/Step3';
import WorkAddress4 from 'screens/auth/SignUpMaster/work-address/Step4';

const Stack = createStackNavigator();
const MStack = createStackNavigator();

function SignUpMaster() {
  return (
    <MStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MStack.Screen name="Activities" component={Activities} />
      <MStack.Screen name="Profession" component={Profession} />
      <MStack.Screen name="WorkAddress1" component={WorkAddress1} />
      <MStack.Screen name="WorkAddress2" component={WorkAddress2} />
      <MStack.Screen name="WorkAddress3" component={WorkAddress3} />
      <MStack.Screen name="WorkAddress4" component={WorkAddress4} />
    </MStack.Navigator>
  );
}

export default function AuthStack(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUpMaster" component={SignUpMaster} />
      <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
