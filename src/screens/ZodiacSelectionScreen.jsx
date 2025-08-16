// ZodiacSelectionScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  FlatList,
  Alert,
} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export default function ZodiacSelectionScreen({ navigation }) {
  const [selectedSign, setSelectedSign] = useState('');

  const saveZodiacSign = () => {
    if (!selectedSign) {
      Alert.alert('Please select a zodiac sign');
      return;
    }

    const userId = auth().currentUser?.uid;
    if (!userId) {
      Alert.alert('You need to be logged in');
      return;
    }

    database()
      .ref(`/users/${userId}`)
      .update({ zodiacSign: selectedSign })
      .then(() => {
        Alert.alert('Zodiac Sign Saved Successfully');
        navigation.goBack(); // Go back after saving
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.ibb.co/0m7NfWc/zodiac-bg.jpg' }} // Replace with your own image link
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.heading}>Select Your Zodiac Sign</Text>
        <FlatList
          data={zodiacSigns}
          numColumns={2}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.signBox,
                selectedSign === item && styles.selectedBox
              ]}
              onPress={() => setSelectedSign(item)}
            >
              <Text
                style={[
                  styles.signText,
                  selectedSign === item && styles.selectedText
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity style={styles.saveButton} onPress={saveZodiacSign}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    alignItems: 'center',
  },
  signBox: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 15,
    margin: 8,
    borderRadius: 10,
    width: 140,
    alignItems: 'center',
  },
  selectedBox: {
    backgroundColor: '#FFD700',
  },
  signText: {
    color: 'white',
    fontSize: 18,
  },
  selectedText: {
    color: 'black',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#FF9800',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
