import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Platform,
} from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SCREEN_WIDTH = Dimensions.get('window').width;

const MainPointScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/welcome-bg.jpg')}
      style={styles.background}
      resizeMode="cover"
      blurRadius={Platform.OS === 'ios' ? 2 : 1}
    >
      

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.welcomeText}>Welcome to Pranverse ✨</Text>

        {/* Feature Rows */}
        <View style={styles.row}>
          <FeatureCard title="Services" icon="hands-pray" onPress={() => navigation.navigate('Services')} />
          <FeatureCard title="Products" icon="shopping" onPress={() => navigation.navigate('Products')} />
          <FeatureCard title="Courses" icon="book-open-page-variant" onPress={() => navigation.navigate('Courses')} />
        </View>

        <BannerCard
          title="Free Tarot Reading"
          icon="cards-playing-outline"
          description="Get answers & insights you need"
          buttonText="Start Reading"
          onPress={() => alert('Tarot clicked')}
        />
          </ScrollView>
    </ImageBackground>
  );
};

const FeatureCard = ({ title, icon, onPress }) => (
  <TouchableOpacity style={styles.featureCard} onPress={onPress}>
    <Icon name={icon} size={26} color="#B88A3B" />
    <Text style={styles.featureText}>{title}</Text>
  </TouchableOpacity>
);

const BannerCard = ({ title, icon, description, buttonText, onPress }) => (
  <View style={styles.bannerCard}>
    <Text style={styles.bannerTitle}><Icon name={icon} size={20} /> {title}</Text>
    <Text style={styles.bannerDescription}>{description}</Text>
    <TouchableOpacity style={styles.bannerButton} onPress={onPress}>
      <Text style={styles.bannerButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255,255,255,0.85)',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B88A3B',
  },
  scrollContent: {
    padding: 16,
  },
  welcomeText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  featureCard: {
    backgroundColor: '#fff',
    width: (SCREEN_WIDTH - 64) / 3,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
  },
  featureText: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 6,
  },
  bannerCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    elevation: 4,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B88A3B',
    marginBottom: 8,
  },
  bannerDescription: {
    fontSize: 14,
    marginBottom: 12,
    color: '#555',
  },
  bannerButton: {
    backgroundColor: '#B88A3B',
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  bannerButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default MainPointScreen;
