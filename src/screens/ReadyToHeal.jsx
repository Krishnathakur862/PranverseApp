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
      source={require('../assets/bg2.jpg')}
      style={styles.bg}
      resizeMode="cover"
    >
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.overlay}>
        <Text style={styles.heading}>Astrology</Text>
        <Text style={styles.subheading}>Your Personal Horoscope in your Mobile.Know more about yourself with our expert calculation</Text>

        <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('Dashboard')} 
>
  <Text style={styles.buttonText}>Get Started</Text>
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
    marginTop:120
  },
  heading: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#ffffffff',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: '#fff0cc',
    
  },
  subheading: {
    fontSize: 14,
    color: '#ffffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#5c51baff',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    
    
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});