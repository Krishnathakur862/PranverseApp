import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const courses = [
  { id: '1', title: 'Reiki Beginner', icon: 'fitness-outline' },
  { id: '2', title: 'Advanced Tarot', icon: 'book-outline' },
  { id: '3', title: 'Chakra Meditation', icon: 'infinite-outline' },
  { id: '4', title: 'Sound Healing', icon: 'musical-notes-outline' },
];

const Courses = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Our Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Icon name={item.icon} size={40} color="#B88A3B" style={styles.icon} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Courses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFBEF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#B88A3B',
    textAlign: 'center',
  },
  list: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    width: 150,
    elevation: 4,
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    color: '#444',
    fontWeight: '600',
    textAlign: 'center',
  },
});
