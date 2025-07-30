import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';

const Virgo = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFBEF" />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* 1. About Virgo */}
        <View style={styles.card}>
          <Text style={styles.title}>♍ About Virgo</Text>
          <Text style={styles.text}>
            Virgo (August 23 - September 22) is an earth sign ruled by Mercury. Virgos are analytical, detail-oriented, and practical. Known for their strong sense of duty and reliability, they are excellent problem solvers who strive for perfection. They value order, cleanliness, and helping others.
          </Text>
        </View>

        {/* 2. Things to Do */}
        <View style={styles.card}>
          <Text style={styles.title}>✅ Things Virgo Should Do</Text>
          <Text style={styles.text}>
            • Stay organized and maintain a routine{'\n'}
            • Use your analytical skills to help others{'\n'}
            • Practice self-care and avoid overworking{'\n'}
            • Embrace imperfection and allow room for growth
          </Text>
        </View>

        {/* 3. Things to Avoid */}
        <View style={styles.card}>
          <Text style={styles.title}>🚫 Things Virgo Should Avoid</Text>
          <Text style={styles.text}>
            • Being overly critical of yourself or others{'\n'}
            • Micromanaging or obsessing over details{'\n'}
            • Suppressing emotions instead of expressing them{'\n'}
            • Taking on too much responsibility without asking for help
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Virgo;

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
