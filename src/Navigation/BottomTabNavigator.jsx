import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MainPointScreen from '../screens/MainPointScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ServicesScreen from '../screens/ServicesScreen';
import CoursesScreen from '../screens/CoursesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MeditationScreen from '../screens/MeditationScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import MyCoursesScreen from '../screens/MyCoursesScreen';
import MyBookingsScreen from '../screens/MyBookingScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';

          switch (route.name) {
            case 'Dashboard':
              iconName = 'grid';
              break;
            case 'Products':
              iconName = 'pricetag';
              break;
            case 'Services':
              iconName = 'construct';
              break;
            case 'Courses':
              iconName = 'book';
              break;
            case 'Profile':
              iconName = 'person';
              break;
            case 'Meditation':
              iconName = 'leaf';
              break;
            case 'Settings':
              iconName = 'settings';
              break;
            case 'Notifications':
              iconName = 'notifications';
              break;
            case 'MyCourses':
              iconName = 'school';
              break;
            case 'MyBookings':
              iconName = 'calendar';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarScrollEnabled: true,
        tabBarStyle: {
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={MainPointScreen} />
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Courses" component={CoursesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Meditation" component={MeditationScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="MyCourses" component={MyCoursesScreen} />
      <Tab.Screen name="MyBookings" component={MyBookingsScreen} />
    </Tab.Navigator>
  );
}
