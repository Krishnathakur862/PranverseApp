import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

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

export default function HoroscopeScreen() {
  const [selectedSign, setSelectedSign] = React.useState('Aries');
  const [inputSign, setInputSign] = React.useState('');

  const handleInputSubmit = () => {
    const formattedSign = inputSign.trim().charAt(0).toUpperCase() + inputSign.trim().slice(1).toLowerCase();
    if (horoscopes.hasOwnProperty(formattedSign)) {
      setSelectedSign(formattedSign);
    } else {
      Alert.alert('Invalid Sign', 'Please enter a valid zodiac sign.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Daily Horoscope</Text>

      <TextInput
        placeholder="Enter zodiac sign"
        value={inputSign}
        onChangeText={setInputSign}
        style={styles.input}
      />
      <Button title="Get Horoscope" onPress={handleInputSubmit} />

      <Picker
        selectedValue={selectedSign}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedSign(itemValue)}
      >
        {zodiacSigns.map((sign) => (
          <Picker.Item key={sign} label={sign} value={sign} />
        ))}
      </Picker>

      <View style={styles.horoscopeBox}>
        <Text style={styles.signTitle}>{selectedSign}</Text>
        <Text style={styles.horoscopeText}>{horoscopes[selectedSign]}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    height: 50,
    marginBottom: 30,
  },
  horoscopeBox: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 16,
    width: '100%',
    elevation: 3,
  },
  signTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  horoscopeText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
