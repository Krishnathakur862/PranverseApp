import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';

const Aries = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFBEF" />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* 1. About Aries */}
        <View style={styles.card}>
          <Text style={styles.title}>♈ About Aries</Text>
          <Text style={styles.text}>
            Aries (March 21 - April 19) is a fire sign ruled by Mars. Known for their courage, enthusiasm, and leadership qualities, Aries individuals are energetic and passionate. They are natural-born leaders who thrive on challenges and are always ready to take initiative.
          </Text>
        </View>

        {/* 2. Things to Do */}
        <View style={styles.card}>
          <Text style={styles.title}>✅ Things Aries Should Do</Text>
          <Text style={styles.text}>
            • Take on leadership roles or start new projects{'\n'}
            • Channel energy into physical activities like sports or workouts{'\n'}
            • Set personal goals and work towards them with focus{'\n'}
            • Practice patience and think before acting
          </Text>
        </View>

        {/* 3. Things to Avoid */}
        <View style={styles.card}>
          <Text style={styles.title}>🚫 Things Aries Should Avoid</Text>
          <Text style={styles.text}>
            • Acting impulsively without considering consequences{'\n'}
            • Being overly competitive or confrontational{'\n'}
            • Ignoring the opinions and needs of others{'\n'}
            • Burning out by doing too much too fast
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Aries;

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
