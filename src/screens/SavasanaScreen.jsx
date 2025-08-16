import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

const SavasanaScreen = () => {
  const [seconds, setSeconds] = useState(600);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={styles.bg}
      blurRadius={2}
    >
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.title}>Savasana (Corpse Pose)</Text>
        <Text style={styles.timer}>🕒 {formatTime()}</Text>

       
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={startTimer}>
            <Text style={styles.buttonText}>Start Timer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={pauseTimer}>
            <Text style={styles.buttonText}>Pause Timer</Text>
          </TouchableOpacity>
        </View>

        
        <Image
          source={require('../assets/Savasna.jpg')} 
          style={styles.poseImage}
          resizeMode="cover"
        />

       
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🌟 Importance</Text>
          <Text style={styles.cardText}>
            Savasana is the final resting pose in yoga that allows deep relaxation, integration of practice, and complete stillness of the body and mind.
          </Text>
        </View>

        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🧘‍♀ How to Perform</Text>
          <Text style={styles.cardText}>
            Lie flat on your back, arms resting by your sides, palms facing up. Let your feet fall naturally outward. Close your eyes, relax all muscles, and breathe naturally. Stay still and mindful for 5–15 minutes.
          </Text>
        </View>

        {/* Benefits */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>💖Benefits</Text>
          <Text style={styles.cardText}>
            - Calms the brain and relieves stress and mild depression{'\n'}
            - Reduces fatigue and lowers blood pressure{'\n'}
            - Promotes self-awareness and mindfulness{'\n'}
            - Restores energy and balances the nervous system
          </Text>
        </View>

      </ScrollView>
    </ImageBackground>
  );
};

export default SavasanaScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    padding: 16,
    paddingBottom: 40,
  },
  timer: {
    fontSize: 28,
    color: '#f6c90e',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderColor: '#f6c90e',
    borderWidth: 1,
  },
  buttonText: {
    color: '#f6c90e',
    fontWeight: '600',
    fontSize: 14,
  },
  poseImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'rgba(29, 28, 28, 0.31)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    color: '#f6c90e',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#ffffffcc',
    lineHeight: 20,
  },
});