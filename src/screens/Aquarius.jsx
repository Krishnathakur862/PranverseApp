import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';

const Aquarius = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFBEF" />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* 1. About Aquarius */}
        <View style={styles.card}>
          <Text style={styles.title}>♒ About Aquarius</Text>
          <Text style={styles.text}>
            Aquarius (January 20 - February 18) is an air sign ruled by Uranus and Saturn. Aquarians are innovative, independent, and forward-thinking. Known for their humanitarian values and love for originality, they often break convention and think outside the box. They value freedom and intellectual growth.
          </Text>
        </View>

        {/* 2. Things to Do */}
        <View style={styles.card}>
          <Text style={styles.title}>✅ Things Aquarius Should Do</Text>
          <Text style={styles.text}>
            • Embrace your uniqueness and express new ideas{'\n'}
            • Participate in causes that promote social change{'\n'}
            • Spend time with like-minded, open-minded individuals{'\n'}
            • Balance emotional connection with your independence
          </Text>
        </View>

        {/* 3. Things to Avoid */}
        <View style={styles.card}>
          <Text style={styles.title}>🚫 Things Aquarius Should Avoid</Text>
          <Text style={styles.text}>
            • Becoming emotionally detached or distant{'\n'}
            • Rebelling just for the sake of being different{'\n'}
            • Ignoring practical matters while chasing ideals{'\n'}
            • Being overly idealistic without grounding your goals
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Aquarius;

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
