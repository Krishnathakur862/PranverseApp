

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { Platform, PermissionsAndroid } from 'react-native';
import notifee, { AndroidImportance, TriggerType, RepeatFrequency } from '@notifee/react-native';
import axios from 'axios';

import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ReadyToHeal from './src/screens/ReadyToHeal';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import Terms from './src/screens/Terms';
import ZodiacCompatibilityScreen from './src/screens/ZodiacCompatibiltyScreen';
import Horoscope from './src/screens/Horoscope';
import CalendarScreen from './src/screens/CalenderScreen';
import Products from './src/screens/ProductsScreen1';
import ProductWebViewScreen from './src/screens/ProductWebViewScreen';
import BirthChartGenerator from './src/screens/BirthCardGenrator';
import ZodiacTraitsScreen from './src/screens/ZodiacTraitsScreen';
import ZodiacDetails from './src/screens/ZodiacDetails';
import MeditationScreen from './src/screens/MeditationScreen';
import YogaAsanaScreen from './src/screens/YogaAsanaScreen';
import ViparitaKaraniScreen from './src/screens/ViparitaKaraniScreen';
import BalasanaScreen from './src/screens/BalasanaScreen';
import ArdhaMatsyendrasanaScreen from './src/screens/ArdhaMatsyendrasanaScreen';
import SavasanaScreen from './src/screens/SavasanaScreen';
import TarotReadingScreen from './src/screens/TarotReadingScreen';
import CommunityChat from './src/screens/CommunityChat';
import JournalScreen from './src/screens/JournalScreen';
import NumerologyScreen from './src/screens/NumerologyScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
  async function createNotification() {
    await notifee.requestPermission();

    const date = new Date();
    date.setSeconds(date.getSeconds() + 10); 

    await notifee.createTriggerNotification(
      {
        title: '🔮 Your Daily Horoscope',
        body: 'Tap to see your prediction for today.',
        android: {
          channelId: 'default',
          smallIcon: 'ic_launcher', // use your own icon if needed
        },
      },
      {
        type: TriggerType.TIMESTAMP,
        timestamp: date.getTime(),
      }
    );
  }

  createNotification();
}, []);

  return (
    <NavigationContainer>
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

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

