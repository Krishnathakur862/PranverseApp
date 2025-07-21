import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';

const SettingsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Notifications</Text>
        <Switch />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Allow Sounds</Text>
        <Switch />
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFBEF',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B88A3B',
    textAlign: 'center',
    marginBottom: 20,
  },
  settingItem: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  settingText: {
    fontSize: 18,
    color: '#333',
  },
});
