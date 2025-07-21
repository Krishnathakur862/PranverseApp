import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/welcome-bg.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Pranverse</Text>
        <Text style={styles.subtitle}>A spiritual healing journey</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 36,
    color: '#B88A3B',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#444',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#F6AFAF',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
