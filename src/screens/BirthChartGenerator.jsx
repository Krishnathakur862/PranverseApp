import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StatusBar,
  ScrollView,
  Modal,
} from 'react-native';

const BirthChartGenerator = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [chartData, setChartData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const isValidDate = (date) => /^\d{4}-\d{2}-\d{2}$/.test(date);
  const isValidTime = (time) => /^\d{2}:\d{2}$/.test(time);

  const showModal = (message) => {
    setModalMessage(message);
    setModalVisible(true);
  };

  const handleGenerateChart = async () => {
    if (!name.trim()) return showModal('Please enter your full name.');
    if (!dob.trim() || !isValidDate(dob)) return showModal('Use date format YYYY-MM-DD.');
    if (!time.trim() || !isValidTime(time)) return showModal('Use time format HH:MM (24-hr).');
    if (!location.trim()) return showModal('Please enter your birth location.');

    try {
      const response = await fetch('https://api.prokerala.com/v2/astrology/birth-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer YOUR_ACCESS_TOKEN', // Replace this with your token
        },
        body: JSON.stringify({
          date: dob,
          time: time,
          coordinates: {
            place: location,
          },
          timezone: 'auto', // Optional, auto-detect
        }),
      });

      if (!response.ok) throw new Error();

      const data = await response.json();

      const chart = {
        name,
        dob,
        time,
        location,
        sunSign: data.sun_sign?.name || 'Unknown',
        moonSign: data.moon_sign?.name || 'Unknown',
        risingSign: data.ascendant?.sign?.name || 'Unknown',
      };

      setChartData(chart);
    } catch (err) {
      showModal('Error generating birth chart. Please try again.');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/welcome-bg.jpg')}
      style={styles.bg}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Generate Your Birth Chart</Text>

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
          placeholder="Birth Location"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={location}
          onChangeText={setLocation}
        />

        <TouchableOpacity style={styles.button} onPress={handleGenerateChart}>
          <Text style={styles.buttonText}>Generate Chart</Text>
        </TouchableOpacity>

        {chartData && (
          <View style={styles.chartCard}>
            <Text style={styles.chartTitle}>Your Birth Chart</Text>
            <Text style={styles.chartText}>Name: {chartData.name}</Text>
            <Text style={styles.chartText}>Date of Birth: {chartData.dob}</Text>
            <Text style={styles.chartText}>Time: {chartData.time}</Text>
            <Text style={styles.chartText}>Location: {chartData.location}</Text>
            <Text style={styles.chartText}>Sun Sign: {chartData.sunSign}</Text>
            <Text style={styles.chartText}>Moon Sign: {chartData.moonSign}</Text>
            <Text style={styles.chartText}>Rising Sign: {chartData.risingSign}</Text>
          </View>
        )}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default BirthChartGenerator;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    borderColor: '#7B5CF4',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
    fontSize: 18,
  },
  chartCard: {
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  chartTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  chartText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#7B5CF4',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
