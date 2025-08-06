import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Alert,
} from 'react-native';

const horoscopes = {
  Aries: "Today, embrace spontaneity. A surprise opportunity may bring joy.",
  Taurus: "Patience will be rewarded. Stay grounded and listen carefully.",
  Gemini: "Communication is key. Be clear with your thoughts and actions.",
  Cancer: "Nurture your personal space. Emotions run deep today.",
  Leo: "Let your confidence shine. People are drawn to your energy.",
  Virgo: "Organize your thoughts. A small change may bring big clarity.",
  Libra: "Balance is your strength. Focus on harmony in relationships.",
  Scorpio: "Your intuition is strong. Trust your gut before acting.",
  Sagittarius: "Adventure awaits. Be open to new experiences and learning.",
  Capricorn: "Work brings results. Stay focused and avoid distractions.",
  Aquarius: "Innovation flows through you. Express unique ideas freely.",
  Pisces: "Let your creativity speak. Emotions fuel your inspiration.",
};

const zodiacSigns = Object.keys(horoscopes);

export default function Horoscope() {
  const [inputSign, setInputSign] = useState('');
  const [selectedSign, setSelectedSign] = useState('Aries');

  const handleInputSubmit = () => {
    const formattedSign =
      inputSign.trim().charAt(0).toUpperCase() +
      inputSign.trim().slice(1).toLowerCase();

    if (horoscopes.hasOwnProperty(formattedSign)) {
      setSelectedSign(formattedSign);
      setInputSign('');
    } else {
      Alert.alert('Invalid Sign', 'Please enter a valid zodiac sign.');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')} // use your Pranverse background image
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>🔮 Daily Horoscope</Text>

        <TextInput
          placeholder="Enter zodiac sign (e.g. Leo)"
          placeholderTextColor="#ddd"
          value={inputSign}
          onChangeText={setInputSign}
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleInputSubmit}>
          <Text style={styles.buttonText}>Get Horoscope</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.signTitle}>{selectedSign}</Text>
          <Text style={styles.description}>{horoscopes[selectedSign]}</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
    paddingTop: 80,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 15,
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#5c51baff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '100%',
  },
  signTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});