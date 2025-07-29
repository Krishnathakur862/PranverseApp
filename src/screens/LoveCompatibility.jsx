import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Modal,
} from 'react-native';

const LoveCompatibility = () => {
  const [yourName, setYourName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // Deterministic compatibility function
  const getCompatibilityScore = (name1, name2) => {
    const combined = name1.trim().toLowerCase() + name2.trim().toLowerCase();
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      hash += combined.charCodeAt(i);
    }
    const score = hash % 101;

    if (score > 80) return '🔥 High compatibility!';
    if (score > 50) return '💖 Fairly compatible';
    return '🤔 Might need some work...';
  };

  const checkCompatibility = () => {
    if (!yourName.trim() || !partnerName.trim()) {
      setResultMessage('⚠️ Please enter both names to check compatibility.');
    } else {
      const message = getCompatibilityScore(yourName, partnerName);
      setResultMessage(message);
    }
    setModalVisible(true);
  };

  return (
    <ImageBackground
      source={require('../assets/welcome-bg.jpg')}
      style={styles.bg}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.container}>
        <Text style={styles.title}>Love Compatibility</Text>

        <TextInput
          placeholder="Your Name"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={yourName}
          onChangeText={setYourName}
        />
        <TextInput
          placeholder="Partner's Name"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={partnerName}
          onChangeText={setPartnerName}
        />

        <TouchableOpacity style={styles.button} onPress={checkCompatibility}>
          <Text style={styles.buttonText}>Check Compatibility</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {yourName && partnerName ? (
              <>
                <Text style={styles.modalHeader}>
                  Love Compatibility Between
                </Text>
                <Text style={styles.nameHighlight}>
                  {yourName.trim()} ❤️ {partnerName.trim()}
                </Text>
                <Text style={styles.modalText}>{resultMessage}</Text>
              </>
            ) : (
              <Text style={styles.modalText}>{resultMessage}</Text>
            )}

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default LoveCompatibility;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF69B4',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 10,
    marginHorizontal: 30,
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  nameHighlight: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF1493',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#FF69B4',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
