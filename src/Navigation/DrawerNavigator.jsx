
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductsScreen from '../screens/ProductsScreen';
import ServicesScreen from '../screens/ServicesScreen';
import CoursesScreen from '../screens/CoursesScreen';
import MeditationScreen from '../screens/MeditationScreen';
import MyCoursesScreen from '../screens/MyCoursesScreen';
import MyBookingsScreen from '../screens/MyBookingScreen';
import EditProfile from '../screens/EditProfile';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BirthChartGenerator from '../screens/BirthChartGenerator'
import Products from '../screens/Products';
import LoveCompatibility from '../screens/LoveCompatibility';
import ZodiacSigns from './ZodiacSigns';
import Gemini from '../screens/Gemini';
import Aries from '../screens/Aries';
import Taurus from '../screens/Taurus';
import Cancer from '../screens/Cancer';
import Leo from '../screens/Leo';
import Virgo from '../screens/Virgo';
import Libra from '../screens/Libra';
import Scorpio from '../screens/Scorpio';
import Sagittarius from '../screens/Sagittarius';
import Capricorn from '../screens/Capricorn';
import Aquarius from '../screens/Aquarius';
import Pisces from '../screens/Pisces';
import HoroscopeScreen from '../screens/Horoscopes';

const Drawer = createDrawerNavigator();


export default function DrawerStack() {
  return (
    <Drawer.Navigator initialRouteName="Profile">
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="EditProfile" component={EditProfile} />
      <Drawer.Screen name="Products" component={ProductsScreen} />
      <Drawer.Screen name="Services" component={ServicesScreen} />
      <Drawer.Screen name="Courses" component={CoursesScreen} />
      <Drawer.Screen name="Meditation" component={MeditationScreen} />
      <Drawer.Screen name="MyCourses" component={MyCoursesScreen} />
      <Drawer.Screen name="MyBookings" component={MyBookingsScreen} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="BirthChartGenerator" component={BirthChartGenerator } />
      <Drawer.Screen name="Productstobuy" component={Products} />
       <Drawer.Screen name="LoveCompatibility" component={LoveCompatibility} />
       <Drawer.Screen name="ZodiacSigns" component={ZodiacSigns} />
       <Drawer.Screen name="Aries" component={Aries} />
      <Drawer.Screen name="Taurus" component={Taurus} />
      <Drawer.Screen name="Gemini" component={Gemini} />
      <Drawer.Screen name="Cancer" component={Cancer} />
      <Drawer.Screen name="Leo" component={Leo} />
      <Drawer.Screen name="Virgo" component={Virgo} />
      <Drawer.Screen name="Libra" component={Libra} />
      <Drawer.Screen name="Scorpio" component={Scorpio} />
      <Drawer.Screen name="Sagittarius" component={Sagittarius} />
      <Drawer.Screen name="Capricorn" component={Capricorn} />
      <Drawer.Screen name="Aquarius" component={Aquarius} />
      <Drawer.Screen name="Pisces" component={Pisces} />
      <Drawer.Screen name='HoroscopeScreen' component={HoroscopeScreen}/>
    </Drawer.Navigator>
  );
}

