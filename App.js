import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import SignupScreen from './signup';
import PasswordReset from './PasswordReset';
import Verification from './Verification';
import Success from './Success';
import TransportManagement from './TransportManagement';
import GSMVerification from './GSMVerification'; 


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="PasswordReset" component={PasswordReset} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="TransportManagement" component={TransportManagement} />
        <Stack.Screen name="GSMVerification" component={GSMVerification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
