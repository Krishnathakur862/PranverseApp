import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
  StatusBar
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/welcome-bg.jpg')}
      style={styles.bg}
      resizeMode="cover"
    >
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.overlay}>
        <Text style={styles.heading}>Welcome to Pranverse</Text>
        <Text style={styles.subheading}>Your Daily Spiritual Guide</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Why')}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={styles.secondaryButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('SignUpScreen')}
        >
          <Text style={styles.secondaryButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  heading: {
    fontSize: 42,
    color: '#B88A3B',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: '#fff0cc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
  },
  subheading: {
    fontSize: 18,
    color: '#5F5F5F',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#F6AFAF',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#B88A3B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  secondaryButton: {
    backgroundColor: '#ffffff99',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 10,
    shadowColor: '#B88A3B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  secondaryButtonText: {
    color: '#B88A3B',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
