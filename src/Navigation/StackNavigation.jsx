// src/navigation/StackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ReadyToHeal from '../screens/ReadyToHeal';
import BottomTabNavigator from 'src/navigation/BottomTabNavigator';
import Terms from '../screens/Terms';
import ZodiacCompatibilityScreen from '../screens/ZodiacCompatibiltyScreen';
import Horoscope from '../screens/Horoscope';
import Products from '../screens/ProductsScreen1';
import ProductWebViewScreen from '../screens/ProductWebViewScreen';
import BirthChartGenerator from '../screens/BirthCardGenrator';
import ZodiacTraitsScreen from '../screens/ZodiacTraitsScreen';
import ZodiacDetails from '../screens/ZodiacDetails';
import MeditationScreen from '../screens/MeditationScreen';
import YogaAsanaScreen from '../screens/YogaAsanaScreen';
import ViparitaKaraniScreen from '../screens/ViparitaKaraniScreen';
import BalasanaScreen from '../screens/BalasanaScreen';
import ArdhaMatsyendrasanaScreen from '../screens/ArdhaMatsyendrasanaScreen';
import SavasanaScreen from '../screens/SavasanaScreen';
import TarotReadingScreen from '../screens/TarotReadingScreen';
import CommunityChat from '../screens/CommunityChat';
import JournalScreen from '../screens/JournalScreen';
import NumerologyScreen from '../screens/NumerologyScreen';
import CalendarScreen from '../screens/CalenderScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ReadyToHeal" component={ReadyToHeal} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Terms" component={Terms} options={{ headerShown: false }} />
      <Stack.Screen name="ZodiacCompatibilityScreen" component={ZodiacCompatibilityScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Horoscope" component={Horoscope} options={{ headerShown: false }} />
      <Stack.Screen name="Products" component={Products} options={{ headerShown: false }} />
      <Stack.Screen name="ProductWebViewScreen" component={ProductWebViewScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BirthChartGenerator" component={BirthChartGenerator} options={{ headerShown: false }} />
      <Stack.Screen name="ZodiacTraitsScreen" component={ZodiacTraitsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ZodiacDetails" component={ZodiacDetails} options={{ headerShown: false }} />
      <Stack.Screen name="MeditationScreen" component={MeditationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="YogaAsanaScreen" component={YogaAsanaScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ViparitaKaraniScreen" component={ViparitaKaraniScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BalasanaScreen" component={BalasanaScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ArdhaMatsyendrasanaScreen" component={ArdhaMatsyendrasanaScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SavasanaScreen" component={SavasanaScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TarotReadingScreen" component={TarotReadingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CommunityChat" component={CommunityChat} options={{ headerShown: false }} />
      <Stack.Screen name="JournalScreen" component={JournalScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NumerologyScreen" component={NumerologyScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
