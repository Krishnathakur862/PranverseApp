import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const bookings = [
  { id: '1', service: 'Reiki Healing', date: '20 July, 2025' },
  { id: '2', service: 'Tarot Reading', date: '25 July, 2025' },
];

const MyBookingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Bookings</Text>
      <FlatList
        data={bookings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookingCard}>
            <Text style={styles.service}>{item.service}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MyBookingScreen;

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
  bookingCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  service: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
  },
  date: {
    fontSize: 16,
    color: '#555',
  },
});
