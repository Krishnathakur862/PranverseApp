import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ReadyToHeal from './src/screens/ReadyToHeal';
import BottomTabs from './src/Navigation/BottomTabNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
       <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
           <Stack.Screen name="ReadyToHeal" component={ReadyToHeal} options={{ headerShown: false }} />
            <Stack.Screen name="Dashboard" component={BottomTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
     
    </NavigationContainer>
  );

}
