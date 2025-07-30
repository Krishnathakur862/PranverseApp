import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';

const Leo = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFBEF" />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* 1. About Leo */}
        <View style={styles.card}>
          <Text style={styles.title}>♌ About Leo</Text>
          <Text style={styles.text}>
            Leo (July 23 - August 22) is a fire sign ruled by the Sun. Leos are confident, charismatic, and natural-born leaders. They thrive on attention and admiration, and often shine in the spotlight. Loyal and warm-hearted, Leos are passionate and generous with those they love.
          </Text>
        </View>

        {/* 2. Things to Do */}
        <View style={styles.card}>
          <Text style={styles.title}>✅ Things Leo Should Do</Text>
          <Text style={styles.text}>
            • Embrace leadership roles and inspire others{'\n'}
            • Express creativity through art, performance, or fashion{'\n'}
            • Practice gratitude and uplift those around you{'\n'}
            • Stay confident but open to feedback and growth
          </Text>
        </View>

        {/* 3. Things to Avoid */}
        <View style={styles.card}>
          <Text style={styles.title}>🚫 Things Leo Should Avoid</Text>
          <Text style={styles.text}>
            • Letting pride prevent you from apologizing or listening{'\n'}
            • Seeking validation constantly from others{'\n'}
            • Being overly dramatic or attention-seeking{'\n'}
            • Ignoring others’ needs while focusing on your own spotlight
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Leo;

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
