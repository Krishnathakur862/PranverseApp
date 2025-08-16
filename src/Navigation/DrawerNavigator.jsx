import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EditProfile from '../screens/EditProfile';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Profile"
      screenOptions={{
        drawerStyle: styles.drawer,
        drawerType: 'slide',
        overlayColor: 'transparent',
        sceneContainerStyle: { backgroundColor: 'transparent' },
        drawerLabelStyle: styles.drawerLabel,
        headerStyle: { backgroundColor: '#1a103d' },
        headerTintColor: '#ffffffff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name='EditProfile' component={EditProfile} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: 'rgba(15, 12, 33, 0.95)', 
    width: 250,
    paddingTop: 40,
    borderTopRightRadius: 0, 
    borderBottomRightRadius: 0, 
  },
  drawerLabel: {
    color: '#ffffffff',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '500',
  },
});
