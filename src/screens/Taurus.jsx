import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';

const Taurus = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFBEF" />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* 1. About Taurus */}
        <View style={styles.card}>
          <Text style={styles.title}>♉ About Taurus</Text>
          <Text style={styles.text}>
            Taurus (April 20 - May 20) is an earth sign ruled by Venus. Known for their reliability, patience, and love of comfort, Taureans are grounded and dependable. They appreciate beauty, art, and stability in their environment and relationships.
          </Text>
        </View>

        {/* 2. Things to Do */}
        <View style={styles.card}>
          <Text style={styles.title}>✅ Things Taurus Should Do</Text>
          <Text style={styles.text}>
            • Create a cozy, aesthetically pleasing living space{'\n'}
            • Engage in hobbies involving art, music, or nature{'\n'}
            • Set and work steadily toward financial and personal goals{'\n'}
            • Practice flexibility and openness to change
          </Text>
        </View>

        {/* 3. Things to Avoid */}
        <View style={styles.card}>
          <Text style={styles.title}>🚫 Things Taurus Should Avoid</Text>
          <Text style={styles.text}>
            • Being overly stubborn or resistant to new ideas{'\n'}
            • Overindulging in food, comfort, or material things{'\n'}
            • Avoiding necessary changes or risks{'\n'}
            • Becoming possessive in relationships
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Taurus;

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
