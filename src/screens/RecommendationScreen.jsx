import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const recommendations = [
  {
    title: 'Start Your Chakra Healing',
    desc: 'A 7-day guided audio course to unlock your inner energy.',
  },
  {
    title: 'Vastu Tips for Harmony',
    desc: 'Balance the energy of your home with daily vastu tips.',
  },
  {
    title: 'Beginner Tarot Reading',
    desc: 'Learn how to read cards & energies with ease.',
  },
  {
    title: 'Reiki for Beginners',
    desc: 'Discover how to heal your body with simple reiki practices.',
  },
  {
    title: 'Astrology 101',
    desc: 'Understand zodiac signs and how they shape your day.',
  },
  {
    title: 'Full Moon Ritual Guide',
    desc: 'Release and manifest with the energy of the full moon.',
  },
  {
    title: 'Guided Meditation Pack',
    desc: '5 short audios to reduce stress and increase focus.',
  },
  {
    title: 'Crystal Healing Basics',
    desc: 'Know which crystals work for love, money & peace.',
  },
];

const RecommendationScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/welcome-bg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Personal Recommendations</Text>
        <FlatList
          data={recommendations}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Explore</Text>
              </TouchableOpacity>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#B88A3B',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF80',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#B88A3B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4A7C59',
    textAlign: 'center',
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 12,
  },
  cardButton: {
    backgroundColor: '#F6AFAF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  cardButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default RecommendationScreen;