import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';

const Scorpio = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFBEF" />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* 1. About Scorpio */}
        <View style={styles.card}>
          <Text style={styles.title}>♏ About Scorpio</Text>
          <Text style={styles.text}>
            Scorpio (October 23 - November 21) is a water sign ruled by Pluto and Mars. Scorpios are intense, mysterious, and deeply emotional. They are passionate, loyal, and known for their determination and strong will. Scorpios value truth, transformation, and emotional depth in all aspects of life.
          </Text>
        </View>

        {/* 2. Things to Do */}
        <View style={styles.card}>
          <Text style={styles.title}>✅ Things Scorpio Should Do</Text>
          <Text style={styles.text}>
            • Embrace emotional healing and personal transformation{'\n'}
            • Use your passion to fuel creative or purposeful goals{'\n'}
            • Build deep, trusting connections with others{'\n'}
            • Practice letting go of grudges and forgiving
          </Text>
        </View>

        {/* 3. Things to Avoid */}
        <View style={styles.card}>
          <Text style={styles.title}>🚫 Things Scorpio Should Avoid</Text>
          <Text style={styles.text}>
            • Holding onto resentment or seeking revenge{'\n'}
            • Being overly secretive or distrusting{'\n'}
            • Becoming obsessive or controlling in relationships{'\n'}
            • Suppressing feelings instead of processing them
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Scorpio;

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
