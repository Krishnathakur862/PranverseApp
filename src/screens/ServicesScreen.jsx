import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const services = [
  { id: '1', title: 'Reiki Healing', icon: 'healing' },
  { id: '2', title: 'Tarot Reading', icon: 'auto-awesome' },
  { id: '3', title: 'Chakra Balancing', icon: 'brightness-5' },
  { id: '4', title: 'Sound Therapy', icon: 'music-note' },
  { id: '5', title: 'Meditation Guidance', icon: 'self-improvement' },
  { id: '6', title: 'Aura Cleansing', icon: 'blur-on' },
  { id: '7', title: 'Numerology', icon: 'calculate' },
  { id: '8', title: 'Crystal Therapy', icon: 'spa' },
];

const ServicesScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <Icon name={item.icon} size={40} color="#B88A3B" />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Spiritual Services</Text>
      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 30,
      backgroundColor: '#FFFBEF',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#B88A3B', 
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
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
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    textAlign: 'center',
  },
});
