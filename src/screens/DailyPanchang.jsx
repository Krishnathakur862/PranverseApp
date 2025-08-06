import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ToolkitCard = ({ title, description, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDesc}>{description}</Text>
  </TouchableOpacity>
);

export default function DailyPanchang() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/welcome-bg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Astrology Toolkit 🔮</Text>

        <ToolkitCard
          title="🗓 Daily Panchang"
          description="Know today's tithi, nakshatra, sunrise/sunset & more."
          onPress={() => navigation.navigate('DailyPanchang')}
        />
        
        <ToolkitCard
          title="♉ Zodiac Traits"
          description="Explore your zodiac strengths, weaknesses & compatibility."
          onPress={() => navigation.navigate('ZodiacTraits')}
        />
        <ToolkitCard
          title="💎 Gemstone Guide"
          description="Find the perfect gemstone for healing & success."
          onPress={() => navigation.navigate('GemstoneGuide')}
        />
        <ToolkitCard
          title="🔢 Numerology Insight"
          description="Calculate your life path number & understand your journey."
          onPress={() => navigation.navigate('Numerology')}
        />
        <ToolkitCard
          title="🪐 Planetary Transits"
          description="Track planetary movements & retrograde effects."
          onPress={() => navigation.navigate('PlanetaryTransits')}
        />
        <ToolkitCard
          title="🎨 Lucky Color & Number"
          description="Today’s lucky color, number, and time slot."
          onPress={() => navigation.navigate('LuckyColor')}
        />
        <ToolkitCard
          title="📚 Learn Astrology"
          description="Short reads on powerful topics like retrograde, Rahu, karma."
          onPress={() => navigation.navigate('LearnAstrology')}
        />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
    paddingBottom: 100,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#B88A3B',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF80',
    borderRadius: 15,
    padding: 16,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A4A4A',
  },
  cardDesc: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});