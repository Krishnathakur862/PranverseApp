import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';

const notifications = [
  { id: '1', message: 'Your healing session is confirmed for tomorrow.' },
  { id: '2', message: 'New course "Crystal Energy" has been added.' },
  { id: '3', message: 'Don’t forget your meditation today.' },
];

const NotificationScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')} // Change to your spiritual background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.header}>Notifications</Text>
        <FlatList
          data={notifications}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffffff',
    textAlign: 'center',
    marginBottom: 25,
  },
  card: {
    backgroundColor: 'rgba(57, 54, 54, 0.3)',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
        borderRadius:16,

  
    
  },
  message: {
    fontSize: 16,
    color: '#ffffffff',
    fontWeight: '500',
  },
});
