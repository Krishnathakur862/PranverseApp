import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function MeditationScreen() {
  const [secondsLeft, setSecondsLeft] = useState(60); // default 1 min
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [minutesInput, setMinutesInput] = useState('');
  const [secondsInput, setSecondsInput] = useState('');

  const startTimer = () => {
    if (!isRunning && secondsLeft > 0) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const handleSetTime = () => {
    const mins = parseInt(minutesInput) || 0;
    const secs = parseInt(secondsInput) || 0;
    const totalSeconds = mins * 60 + secs;
    if (totalSeconds > 0) {
      setSecondsLeft(totalSeconds);
      setModalVisible(false);
      setMinutesInput('');
      setSecondsInput('');
    } else {
      alert('Please set a valid time.');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/meditation.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.heading}>Breathe. Relax. Meditate.</Text>

        <Text style={styles.timer}>
          {String(Math.floor(secondsLeft / 60)).padStart(2, '0')}:
          {String(secondsLeft % 60).padStart(2, '0')}
        </Text>

        <TouchableOpacity style={styles.button} onPress={startTimer}>
          <Text style={styles.buttonText}>
            {isRunning ? 'Meditating...' : 'Start Meditation'}
          </Text>
        </TouchableOpacity>

        {!isRunning && (
          <TouchableOpacity
            style={[styles.button, { marginTop: 15, backgroundColor: '#B88A3B' }]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.buttonText}>Set Timer</Text>
          </TouchableOpacity>
        )}

        {/* Modal for Time Input */}
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <KeyboardAvoidingView
            style={styles.modalContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Set Meditation Time</Text>
              <View style={styles.inputRow}>
                <TextInput
                  placeholder="Minutes"
                  keyboardType="number-pad"
                  style={styles.input}
                  value={minutesInput}
                  onChangeText={setMinutesInput}
                />
                <Text style={{ color: '#fff', fontSize: 24 }}>:</Text>
                <TextInput
                  placeholder="Seconds"
                  keyboardType="number-pad"
                  style={styles.input}
                  value={secondsInput}
                  onChangeText={setSecondsInput}
                />
              </View>
              <TouchableOpacity style={styles.modalButton} onPress={handleSetTime}>
                <Text style={styles.modalButtonText}>Set Time</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ color: 'lightgray', marginTop: 10 }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  timer: {
    fontSize: 60,
    color: '#B88A3B',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#F6AFAF',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  inputRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: 80,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
  },
  modalButton: {
    backgroundColor: '#B88A3B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
