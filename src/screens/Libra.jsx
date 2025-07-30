import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';

const Libra = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFBEF" />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* 1. About Libra */}
        <View style={styles.card}>
          <Text style={styles.title}>♎ About Libra</Text>
          <Text style={styles.text}>
            Libra (September 23 - October 22) is an air sign ruled by Venus. Libras are known for their love of balance, harmony, and fairness. They are diplomatic, charming, and highly social. Libras value beauty, art, and relationships, often seeking peace and avoiding conflict whenever possible.
          </Text>
        </View>

        {/* 2. Things to Do */}
        <View style={styles.card}>
          <Text style={styles.title}>✅ Things Libra Should Do</Text>
          <Text style={styles.text}>
            • Surround yourself with art, music, and beauty{'\n'}
            • Foster healthy, balanced relationships{'\n'}
            • Speak your mind rather than always pleasing others{'\n'}
            • Practice decision-making to build confidence
          </Text>
        </View>

        {/* 3. Things to Avoid */}
        <View style={styles.card}>
          <Text style={styles.title}>🚫 Things Libra Should Avoid</Text>
          <Text style={styles.text}>
            • Avoiding conflict to keep the peace at any cost{'\n'}
            • Overthinking every decision or being indecisive{'\n'}
            • Relying too much on others for approval{'\n'}
            • Ignoring your own needs while trying to please everyone
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Libra;

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
