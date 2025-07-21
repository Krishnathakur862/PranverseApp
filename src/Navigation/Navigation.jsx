// navigation/Navigation.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import WhyAreYouHere from '../screens/';
import ReadyToHeal from '../screens/ReadyToHeal';
import RecommendationScreen from '../screens/RecommendationScreen';
import BottomTabNavigator from './BottomTabNavigator'; // <-- Import it

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ReadyToHeal" component={ReadyToHeal} />
    </Stack.Navigator>
  );
}
