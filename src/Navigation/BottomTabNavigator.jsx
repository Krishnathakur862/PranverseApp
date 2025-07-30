import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MainPointScreen from '../screens/MainPointScreen';
import ZodiacSigns from './ZodiacSigns';
import DrawerStack from './DrawerNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
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
            case 'ZodiacSigns':
              iconName = 'planet'; // You can use 'star' or 'sparkles' as well
              break;
            case 'More':
              iconName = 'apps';
              break;
            default:
              iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={MainPointScreen} />
      <Tab.Screen name="ZodiacSigns" component={ZodiacSigns} />
      <Tab.Screen name="More" component={DrawerStack} />
    </Tab.Navigator>
  );
}
