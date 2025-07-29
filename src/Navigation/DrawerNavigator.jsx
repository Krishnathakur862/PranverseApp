
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
    </Drawer.Navigator>
  );
}

