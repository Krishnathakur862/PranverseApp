
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductsScreen from '../screens/ProductsScreen';
import ServicesScreen from '../screens/ServicesScreen';
import CoursesScreen from '../screens/CoursesScreen';
import MeditationScreen from '../screens/MeditationScreen';
import MyCoursesScreen from '../screens/MyCoursesScreen';
import MyBookingsScreen from '../screens/MyBookingScreen';

const Drawer = createDrawerNavigator();


export default function DrawerStack() {
  return (
    <Drawer.Navigator initialRouteName="Products">
      <Drawer.Screen name="Products" component={ProductsScreen} />
      <Drawer.Screen name="Services" component={ServicesScreen} />
      <Drawer.Screen name="Courses" component={CoursesScreen} />
      <Drawer.Screen name="Meditation" component={MeditationScreen} />
      <Drawer.Screen name="MyCourses" component={MyCoursesScreen} />
      <Drawer.Screen name="MyBookings" component={MyBookingsScreen} />
    </Drawer.Navigator>
  );
}

