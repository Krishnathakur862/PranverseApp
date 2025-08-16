import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SCREEN_WIDTH = Dimensions.get('window').width;

const healingAsanas = [
  { name: 'BalasanaScreen ', icon: 'baby', route: 'BalasanaScreen' },
  { name: 'ViparitaKaraniScreen ', icon: 'wall-sconce-flat', route: 'ViparitaKaraniScreen' },
  { name: 'ArdhaMatsyendrasanaScreen', icon: 'fish', route: 'ArdhaMatsyendrasanaScreen' },
  { name: 'SavasanaScreen', icon: 'bed', route: 'SavasanaScreen' },
];

const YogaAsanaScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.heading}>Healing Yoga Asanas 🧘‍♀</Text>
        {healingAsanas.map((asana, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate(asana.route)}
          >
            <View style={styles.iconContainer}>
              <Icon name={asana.icon} size={28} color="#fff" />
            </View>
            <Text style={styles.cardText}>{asana.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
    paddingTop: 60,
  },
  heading: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 16,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  iconContainer: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 50,
    padding: 10,
    marginRight: 15,
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    flexShrink: 1,
  },
});

export default YogaAsanaScreen;