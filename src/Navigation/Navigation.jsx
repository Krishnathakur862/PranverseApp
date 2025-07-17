import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens

import WhyAreYouHere from './src/screens/WhyAreYouHere';
import ReadyToHeal from './src/screens/ReadyToHeal';
import MainPointScreen from './src/screens/MainPointScreen'; 
import RecommendationScreen from './src/screens/RecommendationScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';


const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignupScreen} />
        <Stack.Screen name="Why" component={WhyAreYouHere} />
        <Stack.Screen name="Heal" component={ReadyToHeal} />
        <Stack.Screen name="MainPoint" component={MainPointScreen} />
        <Stack.Screen name="RecommendationScreen" component={RecommendationScreen} />
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}