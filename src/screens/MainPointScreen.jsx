import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Platform,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SCREEN_WIDTH = Dimensions.get('window').width;

const MainPointScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#FFD700" />
        <Text style={styles.loaderText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={styles.background}
      resizeMode="cover"
      blurRadius={Platform.OS === 'ios' ? 2 : 1}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <SafeAreaView style={{ flex: 1 }}>
        {/* Fixed Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Welcome to Pranverse</Text>
        </View>

        {/* Scrollable Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <BannerCard
            title="Zodiac Traits"
            icon="zodiac-aquarius"
            description="Explore personality traits, strengths, and challenges for each zodiac sign."
            buttonText="See Traits"
            onPress={() => navigation.navigate('ZodiacTraitsScreen')}
          />

          <BannerCard
            title="Horoscopes"
            icon="white-balance-sunny"
            description="Daily horoscopes — quick guidance for your sun sign and the day's energies."
            buttonText="Read Today"
            onPress={() => navigation.navigate('Horoscope')}
          />

          <BannerCard
            title="Ritual Journal"
            icon="book-open-page-variant"
            description="Write reflections, save entries, and revisit them anytime in your personal journal."
            buttonText="Write Now"
            onPress={() => navigation.navigate('JournalScreen')}
          />

          <BannerCard
            title="Free Tarot Reading"
            icon="cards-playing-outline"
            description="Pick a deck and receive intuitive tarot readings for clarity and guidance."
            buttonText="Start Reading"
            onPress={() => navigation.navigate('TarotReadingScreen')}
          />

          <BannerCard
            title="Meditation"
            icon="meditation"
            description="Guided meditations and relaxation techniques to restore inner peace."
            buttonText="Start Healing"
            onPress={() => navigation.navigate('MeditationScreen')}
          />

          <BannerCard
            title="Yoga Asanas"
            icon="human"
            description="Beginner-friendly asanas with step-by-step instructions and benefits."
            buttonText="Practice"
            onPress={() => navigation.navigate('YogaAsanaScreen')}
          />

          <BannerCard
            title="Birth Chart Generator"
            icon="chart-pie"
            description="Generate your natal chart by entering birth details and see planetary positions."
            buttonText="Create Chart"
            onPress={() => navigation.navigate('BirthChartGenerator')}
          />

          <BannerCard
            title="Community Chat"
            icon="account-group"
            description="Join our community to chat with members & experts, ask questions, and share experiences."
            buttonText="Join Community"
            onPress={() => navigation.navigate('CommunityChat')}
          />

          <BannerCard
            title="Numerology"
            icon="numeric"
            description="Discover the significance of numbers in your life through numerology."
            buttonText="Explore Numbers"
            onPress={() => navigation.navigate('NumerologyScreen')}
          />

          <BannerCard
            title="Zodiac Compatibility"
            icon="heart-multiple"
            description="Compare two zodiac signs and learn about their compatibility."
            buttonText="Check Compatibility"
            onPress={() => navigation.navigate('ZodiacCompatibilityScreen')}
          />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const BannerCard = ({ title, icon, description, buttonText, onPress }) => (
  <View style={styles.bannerCard}>
    <Text style={styles.bannerTitle}>
      <Icon name={icon} size={22} color="#FFD700" /> {title}
    </Text>
    <Text style={styles.bannerDescription}>{description}</Text>
    <TouchableOpacity style={styles.bannerButton} onPress={onPress}>
      <Text style={styles.bannerButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  background: { flex: 1 },
  headerContainer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  scrollContent: { padding: 16, paddingBottom: 36 },
  welcomeText: {
    fontSize: 22,
    color: '#ffffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  bannerCard: {
    backgroundColor: 'rgba(82, 70, 70, 0.28)',
    padding: 20,
    borderRadius: 18,
    marginBottom: 18,
    minHeight: 140,
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFD700',
    marginBottom: 8,
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  bannerDescription: {
    fontSize: 15,
    marginBottom: 14,
    color: '#EDEDED',
    lineHeight: 20,
  },
  bannerButton: {
    backgroundColor: '#5c51ba',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
  },
  bannerButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    marginTop: 10,
    fontSize: 16,
    color: '#FFD700',
    fontWeight: '500',
  },
});

export default MainPointScreen;
