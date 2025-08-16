import React, { useState, useEffect } from 'react';
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
import axios from 'axios';

export default function Horoscope() {
  const [inputSign, setInputSign] = useState('');
  const [selectedSign, setSelectedSign] = useState('Aries');
  const [horoscopeText, setHoroscopeText] = useState('');
const fetchHoroscope = async (sign) => {
  try {
    const res = await axios.get(
      `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign.toLowerCase()}&day=today`
    );
    setHoroscopeText(res.data.data.horoscope_data);
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    Alert.alert('Error', 'Could not fetch horoscope. Try again later.');
  }
};




  const handleInputSubmit = () => {
    const formattedSign =
      inputSign.trim().charAt(0).toUpperCase() +
      inputSign.trim().slice(1).toLowerCase();

    const validSigns = [
      'Aries','Taurus','Gemini','Cancer','Leo','Virgo',
      'Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'
    ];

    if (validSigns.includes(formattedSign)) {
      setSelectedSign(formattedSign);
      fetchHoroscope(formattedSign);
      setInputSign('');
    } else {
      Alert.alert('Invalid Sign', 'Please enter a valid zodiac sign.');
    }
  };

  useEffect(() => {
    fetchHoroscope(selectedSign);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
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
          <Text style={styles.description}>
            {horoscopeText || 'Enter a sign to see today’s horoscope.'}
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { padding: 20, paddingTop: 80, alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 25, textAlign: 'center' },
  input: {
    width: '100%', height: 50, borderRadius: 12, borderWidth: 1,
    borderColor: '#fff', paddingHorizontal: 15, color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', marginBottom: 15,
  },
  button: { backgroundColor: '#5c51baff', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 12, marginBottom: 30 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  card: { backgroundColor: 'rgba(255, 255, 255, 0.1)', borderWidth: 1, borderColor: '#fff', borderRadius: 20, padding: 20, width: '100%' },
  signTitle: { fontSize: 24, color: '#fff', fontWeight: 'bold', textAlign: 'center', marginBottom: 12 },
  description: { fontSize: 18, color: '#fff', textAlign: 'center' },
});
