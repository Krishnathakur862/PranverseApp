import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';

const Cancer = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFBEF" />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* 1. About Cancer */}
        <View style={styles.card}>
          <Text style={styles.title}>♋ About Cancer</Text>
          <Text style={styles.text}>
            Cancer (June 21 - July 22) is a water sign ruled by the Moon. Known for their deep emotional sensitivity, intuition, and nurturing nature, Cancers are protective and compassionate. They are deeply connected to family and home and often put others' needs before their own.
          </Text>
        </View>

        {/* 2. Things to Do */}
        <View style={styles.card}>
          <Text style={styles.title}>✅ Things Cancer Should Do</Text>
          <Text style={styles.text}>
            • Spend quality time with loved ones and nurture close relationships{'\n'}
            • Express emotions through art, journaling, or conversations{'\n'}
            • Create a comfortable and safe home environment{'\n'}
            • Trust your intuition and honor your emotional needs
          </Text>
        </View>

        {/* 3. Things to Avoid */}
        <View style={styles.card}>
          <Text style={styles.title}>🚫 Things Cancer Should Avoid</Text>
          <Text style={styles.text}>
            • Holding onto the past or emotional baggage{'\n'}
            • Retreating into your shell when hurt instead of communicating{'\n'}
            • Becoming overly dependent or clingy in relationships{'\n'}
            • Neglecting self-care while taking care of others
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Cancer;

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
