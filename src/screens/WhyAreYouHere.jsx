import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  ScrollView
} from 'react-native';

const WhyAreYouHere = ({ navigation }) => {
  const options = ['Astrology', 'Vastu', 'Meditation', 'Reiki', 'Tarot'];

  return (
    <ImageBackground
      source={require('../assets/welcome-bg.jpg')}
      style={styles.bg}
      resizeMode="cover"
    >
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.overlay}>
        <Text style={styles.heading}>Why are you here?</Text>

        <ScrollView contentContainerStyle={styles.optionContainer}>
          {options.map((option, index) => (
            <TouchableOpacity key={index} style={styles.optionButton}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate('Heal')}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default WhyAreYouHere;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#B88A3B',
    marginBottom: 40,
    textAlign: 'center',
    textShadowColor: '#fff0cc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
  },
  optionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  optionButton: {
    backgroundColor: '#F6AFAF',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
    width: 250,
    shadowColor: '#B88A3B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  skipButton: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#F6AFAF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignSelf: 'center',
    shadowColor: '#B88A3B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  skipText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});