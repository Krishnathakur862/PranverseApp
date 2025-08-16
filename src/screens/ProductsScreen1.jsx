import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Platform,
  ActivityIndicator,
  SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const products = [
  { title: "Scorpio Zodiac Crystal Bracelet – ₹1,269", description: "Certified natural crystals aligned with zodiac sign Scorpio.", link: "https://www.amazon.in/dp/B0C4KSPDX8" },
  { title: "Zodiac Crystal Bracelet (Aquarius) – ₹999", description: "Healing gemstone bracelet selected per Aquarius zodiac traits.", link: "https://www.amazon.in/dp/B0F6YTM626" },
  { title: "Top Plaza Bead Chakra Bracelet – ₹699", description: "8 mm chakra stone beads, meditation and yoga use.", link: "https://www.amazon.in/dp/B083N5JJNT" },
  { title: "RudraGallery Certified 7 Chakra Bracelet – ₹990", description: "Reiki-charged, adjustable chakra healing bracelet", link: "https://www.amazon.in/dp/B0CZDYJ7L9" },
  { title: "Marke Jewelry Chakra Lava Bracelet– ₹299", description: "Lava stone chakra bracelet for grounding and protection.", link: "https://www.amazon.in/dp/B08K96KG9X" },
  { title: "Crystu Natural 7 Chakra Bracelet – ₹275", description: "Multicolor certified chakra healing stone bracelet. ", link: "https://www.amazon.in/dp/B07CRDBX86" },
  { title: "Mesmerize 7 Chakra Elastic Bracelet – ₹949", description: "Clear Quartz and chakra set with charm.", link: "https://www.amazon.in/dp/B0CYCNPX2G" },
  { title: "9Dzine Aquarius Zodiac Bracelet – ₹1,733", description: "Multicolor astrology bracelet featuring Aquarius stones..", link: "https://www.amazon.in/dp/B08M9H8VCQ" },
  { title: "Divine Hindu Rashi Bracelet – ₹1742", description: "Natural zodiac-specific healing stones in bracelet form.", link: "https://www.amazon.in/dp/B0F1W8PG4Z" },
  { title: "Leo Zodiac Crystal Kit (Combo Set) – ₹699", description: "Healing crystal set for Leo with bracelets & necklace.", link: "https://www.amazon.in/dp/B0BRSWFZP8" },
];

const ProductsScreen1 = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <ImageBackground
        source={require('../assets/bg2.jpg')}
        style={styles.bg}
        blurRadius={Platform.OS === 'ios' ? 2 : 1}
      >
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#f6c90e" />
          <Text style={styles.loaderText}>Loading Products...</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={styles.bg}
      blurRadius={Platform.OS === 'ios' ? 2 : 1}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <SafeAreaView style={styles.safeArea}>
        
        {/* Fixed Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>🛒 Astrology & Healing Products</Text>
          <Text style={styles.subHeader}>Curated tools aligned with your zodiac journey</Text>
        </View>

        {/* Scrollable Product List */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {products.map((p, i) => (
            <View key={i} style={styles.card}>
              <Text style={styles.title}>{p.title}</Text>
              <Text style={styles.description}>{p.description}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ProductWebViewScreen', { link: p.link })}
              >
                <Text style={styles.buttonText}>View on Amazon</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

      </SafeAreaView>
    </ImageBackground>
  );
};

export default ProductsScreen1;

const styles = StyleSheet.create({
  bg: { flex: 1 },
  safeArea: { flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loaderText: {
    marginTop: 12,
    color: '#fff',
    fontSize: 16
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: 'transparent'
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 16,
    color: '#ffffffcc',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'rgba(29,28,28,0.31)',
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    color: '#f6c90e',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#ffffffcc',
    marginBottom: 12,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#5c51baff',
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
