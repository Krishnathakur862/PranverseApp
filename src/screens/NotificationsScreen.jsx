import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const notifications = [
  { id: '1', message: 'Your healing session is confirmed for tomorrow.' },
  { id: '2', message: 'New course "Crystal Energy" has been added.' },
  { id: '3', message: 'Don’t forget your meditation today.' },
];

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <Text style={styles.notificationText}>{item.message}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBEF',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B88A3B',
    textAlign: 'center',
    marginBottom: 20,
  },
  notificationCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  notificationText: {
    fontSize: 16,
    color: '#444',
  },
});
