
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
  Vibration,
} from 'react-native';

export default function MeditationScreen() {
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const [modalVisible, setModalVisible] = useState(false); // For setting time
  const [finishModalVisible, setFinishModalVisible] = useState(false); // For session complete
  const [minutesInput, setMinutesInput] = useState('');
  const [secondsInput, setSecondsInput] = useState('');
  const [initialTime, setInitialTime] = useState(60);

  const startTimer = () => {
    if (!isRunning && secondsLeft > 0) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);

            
            Vibration.vibrate(2000);

            
            setFinishModalVisible(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setSecondsLeft(initialTime);
  };

  const handleSetTime = () => {
    const mins = parseInt(minutesInput) || 0;
    const secs = parseInt(secondsInput) || 0;
    const totalSeconds = mins * 60 + secs;
    if (totalSeconds > 0) {
      setSecondsLeft(totalSeconds);
      setInitialTime(totalSeconds);
      setModalVisible(false);
      setMinutesInput('');
      setSecondsInput('');
    } else {
      alert('Please enter a valid time.');
    }
  };

  const formattedTime = () => {
    const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
    const seconds = String(secondsLeft % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.heading}>Breathe. Relax. Meditate.</Text>

        <Text style={styles.timer}>{formattedTime()}</Text>

        {!isRunning ? (
          <TouchableOpacity style={styles.button} onPress={startTimer}>
            <Text style={styles.buttonText}>Start Meditation</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.button, styles.pauseButton]}
            onPress={pauseTimer}
          >
            <Text style={styles.buttonText}>Pause</Text>
          </TouchableOpacity>
        )}

        {!isRunning && (
          <>
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.buttonText}>Set Timer</Text>
            </TouchableOpacity>

            
          </>
        )}

        {/* Set Time Modal */}
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
                  placeholder="Min"
                  keyboardType="number-pad"
                  style={styles.input}
                  value={minutesInput}
                  onChangeText={setMinutesInput}
                />
                <Text style={{ color: '#ffffffff', fontSize: 24 }}>:</Text>
                <TextInput
                  placeholder="Sec"
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

        {/* Session Complete Modal */}
        <Modal
          visible={finishModalVisible}
          transparent={true}
          animationType="fade"
        >
          <View style={styles.finishModal}>
            <Text style={styles.finishText}>✨ Session Complete ✨</Text>
            <Text style={styles.finishSubText}>
              Take a deep breath and feel your calm.
            </Text>
            <TouchableOpacity
              style={styles.finishButton}
              onPress={() => {
                setFinishModalVisible(false);
                resetTimer();
              }}
            >
              <Text style={styles.finishButtonText}>Restart</Text>
            </TouchableOpacity>
          </View>
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
    color: '#fff',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#5c51ba',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: 240,
    alignItems: 'center',
    marginVertical: 8,
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
    backgroundColor: '#161414ff',
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
  },
  modalButton: {
    backgroundColor: '#B88A3B',
    paddingVertical: 10,
    borderRadius: 8,
    width: 100,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  finishModal: {
    flex: 1,
    backgroundColor: 'rgba(7, 7, 7, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  finishText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  finishSubText: {
    fontSize: 18,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30,
  },
  finishButton: {
    backgroundColor: '#5c51ba',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
