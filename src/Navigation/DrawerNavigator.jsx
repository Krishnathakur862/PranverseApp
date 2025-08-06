
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EditProfile from '../screens/EditProfile';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
const Drawer = createDrawerNavigator();


export default function DrawerStack() {
  return (
    <Drawer.Navigator initialRouteName="Profile">
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="EditProfile" component={EditProfile} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
  );
}

