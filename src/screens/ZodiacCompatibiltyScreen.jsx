import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';

const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces',
];

const getCompatibility = (sign1, sign2) => {
  const seed = sign1.length + sign2.length + sign1.charCodeAt(0) + sign2.charCodeAt(0);
  return {
    love: (seed * 7) % 101,
    business: (seed * 5) % 101,
    health: (seed * 3) % 101,
    description: `${sign1} and ${sign2} may have different energies, but their bond depends on balance and mutual understanding.`,
  };
};


const ZodiacCompatibilityScreen = () => {
  const [firstSign, setFirstSign] = useState(null);
  const [secondSign, setSecondSign] = useState(null);
  const [result, setResult] = useState(null);

  const handleCompare = () => {
    if (firstSign && secondSign) {
      const res = getCompatibility(firstSign, secondSign);
      setResult(res);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')} 
      style={styles.bg}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Zodiac Compatibility 🔮</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Choose First Sign:</Text>
          <View style={styles.row}>
            {zodiacSigns.map((sign) => (
              <TouchableOpacity
                key={sign}
                style={[
                  styles.signButton,
                  firstSign === sign && styles.selected,
                ]}
                onPress={() => setFirstSign(sign)}
              >
                <Text style={styles.signText}>{sign}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Choose Second Sign:</Text>
          <View style={styles.row}>
            {zodiacSigns.map((sign) => (
              <TouchableOpacity
                key={sign}
                style={[
                  styles.signButton,
                  secondSign === sign && styles.selected,
                ]}
                onPress={() => setSecondSign(sign)}
              >
                <Text style={styles.signText}>{sign}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.compareButton} onPress={handleCompare}>
          <Text style={styles.compareText}>Compare</Text>
        </TouchableOpacity>

        {result && (
          <View style={styles.resultCard}>
            <Text style={styles.resultTitle}>
              {firstSign} ❤ {secondSign}
            </Text>
            <Text style={styles.resultText}>Love: {result.love}%</Text>
            <Text style={styles.resultText}>Business: {result.business}%</Text>
            <Text style={styles.resultText}>Health: {result.health}%</Text>
            <Text style={styles.resultDescription}>{result.description}</Text>
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default ZodiacCompatibilityScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  signButton: {
    width: '30%',
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#5c51baff',
  },
  signText: {
    color: '#fff',
    fontWeight: '600',
  },
  compareButton: {
    backgroundColor: '#5c51baff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  compareText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultCard: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 20,
    borderRadius: 12,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  resultText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  resultDescription: {
    color: '#fff',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});