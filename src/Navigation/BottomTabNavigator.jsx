
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MainPointScreen from '../screens/MainPointScreen';

import DrawerStack from './DrawerNavigator';
import CalendarScreen from '../screens/CalenderScreen';

 

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Dashboard':
              iconName = 'grid';
              break;
           
            case 'More':
              iconName = 'apps'; 
              break;
            default:
              iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={size} color={'#5c51baff'}/>;
        },
        tabBarStyle: {
          height: 50,
        },
        tabBarLabelStyle: {
          fontSize: 8,
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={MainPointScreen} />
      <Tab.Screen name="More" component={DrawerStack} />
        <Tab.Screen name="CalendarScreen" component={CalendarScreen} />

    </Tab.Navigator>
  );
}
