import React from 'react';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import bg2 from '../assets/bg2.jpg'; 

const CommunityChat = () => {
  const handleJoinGroup = () => {
    const groupLink = 'https://chat.whatsapp.com/CRRxDndVSAs4d7Hp27mmZv?mode=ac_t';
    Linking.openURL(groupLink).catch(err => {
      console.error("Failed to open link:", err);
    });
  };

  return (
    <ImageBackground source={bg2} style={styles.background} resizeMode="cover" blurRadius={2}>
      <View style={styles.overlay}>
        <Icon name="account-group" size={60} color="#FFD700" style={{ marginBottom: 15 }} />
        <Text style={styles.title}>Join Our Spiritual Community ✨</Text>
        <Text style={styles.description}>
          Connect with like-minded souls, chat with experts, share your experiences,
          and learn from each other in a safe, supportive space. 🌿
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleJoinGroup}>
          <Text style={styles.buttonText}>💬 Join & Start Chatting</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default CommunityChat;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 25,
    margin: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  description: {
    fontSize: 16,
    color: '#F5F5F5',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#5c51ba',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
