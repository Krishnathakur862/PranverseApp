import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const myCourses = [
  { id: '1', title: 'Reiki Level 1' },
  { id: '2', title: 'Tarot for Beginners' },
  { id: '3', title: 'Sound Healing Mastery' },
];

const MyCoursesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Courses</Text>
      <FlatList
        data={myCourses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MyCoursesScreen;

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
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    color: '#444',
  },
});
