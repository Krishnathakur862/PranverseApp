import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';

const Pisces = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFBEF" />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* 1. About Pisces */}
        <View style={styles.card}>
          <Text style={styles.title}>♓ About Pisces</Text>
          <Text style={styles.text}>
            Pisces (February 19 - March 20) is a water sign ruled by Neptune and Jupiter. Pisceans are deeply empathetic, imaginative, and spiritually inclined. They are known for their compassionate nature, strong intuition, and artistic abilities. Pisces often connect deeply with emotions and the unseen world.
          </Text>
        </View>

        {/* 2. Things to Do */}
        <View style={styles.card}>
          <Text style={styles.title}>✅ Things Pisces Should Do</Text>
          <Text style={styles.text}>
            • Channel creativity through music, writing, or art{'\n'}
            • Spend time in nature or meditative solitude{'\n'}
            • Help others while maintaining healthy boundaries{'\n'}
            • Trust your intuition, but stay grounded in reality
          </Text>
        </View>

        {/* 3. Things to Avoid */}
        <View style={styles.card}>
          <Text style={styles.title}>🚫 Things Pisces Should Avoid</Text>
          <Text style={styles.text}>
            • Escaping problems through fantasy or denial{'\n'}
            • Being overly idealistic or gullible{'\n'}
            • Taking on others' emotions as your own{'\n'}
            • Ignoring practical matters and responsibilities
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Pisces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBEF',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
});
