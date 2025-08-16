import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const tarotCards = [
  {
    name: 'The Fool',
    meaning: 'New beginnings, spontaneity, free spirit.',
    image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg' },
  },
  {
    name: 'The Magician',
    meaning: 'Manifestation, power, inspired action.',
    image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg' },
  },
  {
    name: 'The High Priestess',
    meaning: 'Intuition, divine feminine, subconscious mind.',
    image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg' },
  },
  {
    name: 'The Empress',
    meaning: 'Fertility, nurturing, abundance, beauty.',
    image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg' },
  },
  {
    name: 'The Emperor',
    meaning: 'Authority, structure, father figure, protection.',
    image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg' },
  },
  {
    name: 'The Hierophant',
    meaning: 'Tradition, spiritual wisdom, guidance.',
    image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg' },
  },
{
  name: 'The Lovers',
  meaning: 'Love, union, harmony, choices.',
  image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/L%27Amoureux.jpg' },
},
{
  name: 'The Chariot',
  meaning: 'Control, willpower, victory, determination.',
  image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg' }, 
},


  {
    name: 'Strength',
    meaning: 'Courage, inner strength, resilience.',
    image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg' },
  },
  {
    name: 'The Hermit',
    meaning: 'Introspection, solitude, inner guidance.',
    image: { uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg' },
  },
];

const TarotReadingScreen = () => {
  const [drawnCards, setDrawnCards] = useState([]);

  const drawCards = async () => {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 3);
    setDrawnCards(selected);

    const timestamp = new Date().toISOString();
    const reading = { timestamp, cards: selected };
    try {
      const stored = await AsyncStorage.getItem('tarotHistory');
      const history = stored ? JSON.parse(stored) : [];
      history.push(reading);
      await AsyncStorage.setItem('tarotHistory', JSON.stringify(history));
    } catch (error) {
      console.error('Error saving tarot reading:', error);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={styles.bg}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>🔮 Free Tarot Reading</Text>
        <TouchableOpacity style={styles.button} onPress={drawCards}>
          <Text style={styles.buttonText}>Draw 3 Cards</Text>
        </TouchableOpacity>

        <View style={styles.cardsContainer}>
          {drawnCards.map((card, index) => (
            <View key={index} style={styles.card}>
              <Image source={card.image} style={styles.image} />
              <Text style={styles.cardTitle}>{card.name}</Text>
              <Text style={styles.cardMeaning}>{card.meaning}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default TarotReadingScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    padding: 20,
    flexGrow: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  button: {
    backgroundColor: '#6A5ACD',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  cardsContainer: {
    width: '100%',
    gap: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 12,
    padding: 15,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 200,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  cardTitle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  cardMeaning: {
    textAlign: 'center',
    fontSize: 14,
    color: '#444',
    marginTop: 6,
    lineHeight: 20,
  },
});