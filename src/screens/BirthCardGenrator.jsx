import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, StatusBar, ImageBackground, Alert, ActivityIndicator, Linking } from 'react-native';

export default function BirthChartGenerator() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [time, setTime] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  const generateChart = async () => {
    if (!name || !dob || !time || !city) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    setLoading(true);

    try {
      const geoRes = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=65198c65d29842f1b12124b3eb2c4e2d`);
      const geoData = await geoRes.json();

      if (!geoData.results.length) {
        Alert.alert('Error', 'City not found. Please try again.');
        setLoading(false);
        return;
      }

      const { lat, lng } = geoData.results[0].geometry;

      const dateParam = dob;
      const timeParam = time;
      const locationParam = encodeURIComponent(city);

    
      const url = `https://horoscopes.astro-seek.com/calculate-birth-chart/?narozeni=${dateParam}&narozeni_time=${timeParam}&narozeni_place=${locationParam}&narozeni_lat=${lat}&narozeni_lon=${lng}`;

    
      Linking.openURL(url);
    } catch (err) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground source={require('../assets/bg2.jpg')} style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>🔮 Generate Your Birth Chart</Text>

        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Date of Birth (YYYY-MM-DD)"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={dob}
          onChangeText={setDob}
        />

        <TextInput
          placeholder="Time of Birth (HH:MM)"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={time}
          onChangeText={setTime}
        />

        <TextInput
          placeholder="Birth City"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={city}
          onChangeText={setCity}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#FFD700" style={{ marginTop: 20 }} />
        ) : (
          <TouchableOpacity style={styles.button} onPress={generateChart}>
            <Text style={styles.buttonText}>Open Chart in Browser</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#F5DEB3',
    textAlign: 'center',
    marginBottom: 40,
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  input: {
    backgroundColor: 'rgba(82, 70, 70, 0.5)',
    color: '#fff',
    borderColor: '#B88A3B',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#5c51ba',
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
