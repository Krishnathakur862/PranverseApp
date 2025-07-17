import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainPointScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/welcome-bg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerBig}>Kundli & Daily Puja</Text>

        <View style={styles.cardRow}>
          <FeatureCard title="Horoscope" icon="🔮" />
          <FeatureCard title="Panchang" icon="📅" />
          <FeatureCard title="Daily Tarot" icon="🃏" />
        </View>

        <BannerCard
          title="Daily Puja"
          icon="🙏"
          description="Connect With Your Beloved God"
          buttonText="Get Blessings"
        />

        <BannerCard
          title="Free Tarot Reading"
          icon="🧿"
          description="Get The Answers And Insights You Need"
          buttonText="Get Started"
        />

        <View style={styles.cardRow}>
          <FeatureCard title="Kundli" icon="📜" />
          <FeatureCard title="Match Making" icon="💍" />
          <FeatureCard title="Love Compatibility" icon="❤" />
        </View>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('RecommendationScreen')}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const FeatureCard = ({ title, icon }) => (
  <View style={styles.featureCard}>
    <Text style={styles.cardIcon}>{icon}</Text>
    <Text style={styles.cardText}>{title}</Text>
  </View>
);

const BannerCard = ({ title, icon, description, buttonText }) => (
  <View style={styles.bannerCard}>
    <Text style={styles.bannerIcon}>{icon}</Text>
    <Text style={styles.bannerTitle}>{title}</Text>
    <Text style={styles.bannerDescription}>{description}</Text>
    <TouchableOpacity style={styles.bannerButton}>
      <Text style={styles.bannerButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    padding: 16,
    alignItems: 'center',
  },
  headerSmall: {
    fontSize: 20,
    color: '#5F5F5F',
    fontWeight: '400',
    textAlign: 'center',
  },
  headerBig: {
    fontSize: 28,
    color: '#B88A3B',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    width: '100%',
  },
  featureCard: {
    backgroundColor: '#FFFFFF80',
    borderRadius: 16,
    width: Dimensions.get('window').width / 3 - 24,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#B88A3B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  cardIcon: {
    fontSize: 28,
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5F5F5F',
    textAlign: 'center',
  },
  bannerCard: {
    backgroundColor: '#FFFFFF80',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    alignItems: 'center',
    shadowColor: '#B88A3B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    width: '100%',
  },
  bannerIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#B88A3B',
  },
  bannerDescription: {
    fontSize: 14,
    color: '#5F5F5F',
    textAlign: 'center',
    marginVertical: 8,
  },
  bannerButton: {
    backgroundColor: '#F6AFAF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 4,
  },
  bannerButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  nextButton: {
    backgroundColor: '#F6AFAF',
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 40,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default MainPointScreen;