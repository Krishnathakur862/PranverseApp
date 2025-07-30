import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';

const Sagittarius = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFBEF" />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* 1. About Sagittarius */}
        <View style={styles.card}>
          <Text style={styles.title}>♐ About Sagittarius</Text>
          <Text style={styles.text}>
            Sagittarius (November 22 - December 21) is a fire sign ruled by Jupiter. Known for their adventurous spirit and love for freedom, Sagittarians are optimistic, curious, and philosophical. They seek truth, explore new ideas, and thrive on experiences that expand their mind and perspective.
          </Text>
        </View>

        {/* 2. Things to Do */}
        <View style={styles.card}>
          <Text style={styles.title}>✅ Things Sagittarius Should Do</Text>
          <Text style={styles.text}>
            • Travel and explore different cultures and philosophies{'\n'}
            • Engage in lifelong learning and spiritual growth{'\n'}
            • Share knowledge and inspire others with optimism{'\n'}
            • Balance freedom with responsibility and commitment
          </Text>
        </View>

        {/* 3. Things to Avoid */}
        <View style={styles.card}>
          <Text style={styles.title}>🚫 Things Sagittarius Should Avoid</Text>
          <Text style={styles.text}>
            • Making impulsive decisions without thinking ahead{'\n'}
            • Avoiding emotional intimacy or serious commitment{'\n'}
            • Being blunt or tactless in conversations{'\n'}
            • Restlessness or constantly seeking external stimulation
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Sagittarius;

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
