import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar
} from 'react-native';

const ReadyToHeal = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/welcome-bg.jpg')}
      style={styles.bg}
      resizeMode="cover"
    >
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.overlay}>
        <Text style={styles.heading}>Ready to Heal?</Text>
        <Text style={styles.subheading}>Let the journey begin</Text>

        <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('Dashboard')} // 
>
  <Text style={styles.buttonText}>Start Healing</Text>
</TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

export default ReadyToHeal;

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
    fontSize: 38,
    fontWeight: 'bold',
    color: '#B88A3B',
    marginBottom: 10,
    textAlign: 'center',
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
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});