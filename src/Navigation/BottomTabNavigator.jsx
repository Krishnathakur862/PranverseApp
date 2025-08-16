import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MainPointScreen from '../screens/MainPointScreen';
import DrawerStack from './DrawerNavigator';
import CalendarScreen from '../screens/CalenderScreen';
import ProductsScreen1 from '../screens/ProductsScreen1';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Dashboard':
              iconName = 'grid';
              break;
            case 'Profile':
              iconName = 'person';
              break;
            case 'Calendar':
              iconName = 'calendar';
              break;
            case 'Community':
              iconName = 'chatbox-ellipses';
              break;
            case 'Products':
              iconName = 'cube';
              break;
            default:
              iconName = 'person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: {
          fontSize: 8,
        },
        tabBarActiveTintColor: '#5c51baff',   
        tabBarInactiveTintColor: '#ffffff', 
      })}
    >
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Dashboard" component={MainPointScreen} />
      <Tab.Screen name="Products" component={ProductsScreen1} />
      <Tab.Screen name="Profile" component={DrawerStack} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: 'rgba(29, 28, 28, 0.3)',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: 70,
    left: 10,
    right: 10,
    bottom: 10,
    borderTopWidth: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    overflow: 'hidden',
  },
});
