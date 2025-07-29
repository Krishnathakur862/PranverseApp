import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Linking,
  StatusBar,
  ScrollView,
} from 'react-native';
0

const products = [
  {
    id: 1,
    title: 'Healing Crystals Kit',
    link: 'https://www.amazon.com/dp/B07XBC4XT9',
  },
  {
    id: 2,
    title: 'Aromatherapy Essential Oils Set',
    link: 'https://www.amazon.com/dp/B07Y5XW9QG',
  },
  {
    id: 3,
    title: 'Chakra Bracelet Energy Healing',
    link: 'https://www.amazon.com/dp/B01MTD63FV',
  },
];

const Products = ({ navigation }) => {
  const openLink = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert("Can't open the link.");
    }
  };

  return (
    <ImageBackground
      source={require('../assets/welcome-bg.jpg')}
      style={styles.bg}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Recommended Healing Products</Text>
        {products.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => openLink(item.link)}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardLink}>View on Amazon →</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default Products;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  cardLink: {
    fontSize: 14,
    color: '#1e88e5',
  },
});
