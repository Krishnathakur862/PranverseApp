import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';

const Capricorn = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFBEF" />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* 1. About Capricorn */}
        <View style={styles.card}>
          <Text style={styles.title}>♑ About Capricorn</Text>
          <Text style={styles.text}>
            Capricorn (December 22 - January 19) is an earth sign ruled by Saturn. Capricorns are ambitious, disciplined, and highly responsible. They value tradition, hard work, and long-term success. Practical and goal-oriented, they often take on leadership roles and thrive in structured environments.
          </Text>
        </View>

        {/* 2. Things to Do */}
        <View style={styles.card}>
          <Text style={styles.title}>✅ Things Capricorn Should Do</Text>
          <Text style={styles.text}>
            • Set realistic goals and work steadily toward them{'\n'}
            • Embrace leadership and mentor others{'\n'}
            • Take time to relax and avoid burnout{'\n'}
            • Nurture emotional connections, not just career success
          </Text>
        </View>

        {/* 3. Things to Avoid */}
        <View style={styles.card}>
          <Text style={styles.title}>🚫 Things Capricorn Should Avoid</Text>
          <Text style={styles.text}>
            • Being overly serious or emotionally distant{'\n'}
            • Fearing failure to the point of inaction{'\n'}
            • Overworking and neglecting personal life{'\n'}
            • Relying too heavily on status or external validation
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Capricorn;

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
