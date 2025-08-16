import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const zodiacSigns = [
  { name: 'Aries', emoji: '♈' },
  { name: 'Taurus', emoji: '♉' },
  { name: 'Gemini', emoji: '♊' },
  { name: 'Cancer', emoji: '♋' },
  { name: 'Leo', emoji: '♌' },
  { name: 'Virgo', emoji: '♍' },
  { name: 'Libra', emoji: '♎' },
  { name: 'Scorpio', emoji: '♏' },
  { name: 'Sagittarius', emoji: '♐' },
  { name: 'Capricorn', emoji: '♑' },
  { name: 'Aquarius', emoji: '♒' },
  { name: 'Pisces', emoji: '♓' },
];

export default function ZodiacTraitsScreen() {
  const navigation = useNavigation();

  const handleZodiacPress = (sign) => {
    navigation.navigate('ZodiacDetails', { selectedSign: sign });
  };

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={styles.background}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <SafeAreaView style={{ flex: 1 }}>
        
        {/* Fixed heading */}
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Choose Your Zodiac Sign </Text>
        </View>

        {/* Scrollable list */}
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {zodiacSigns.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => handleZodiacPress(item.name)}
            >
              <Text style={styles.cardText}>
                {item.emoji} {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  headerContainer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  heading: {
    fontSize: 24,
    color: '#B88A3B',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(57, 54, 54, 0.3)',
    padding: 30,
    borderRadius: 15,
    width: '90%',
    marginVertical: 8,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    color: '#B88A3B',
    fontWeight: '600',
  },
});
