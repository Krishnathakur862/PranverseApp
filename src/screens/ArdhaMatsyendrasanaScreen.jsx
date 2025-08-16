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

const ArdhaMatsyendrasanaScreen = () => {
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

        <Text style={styles.title}>Ardha Matsyendrasana (Half Lord of the Fishes Pose)</Text>
        <Text style={styles.timer}>🕒 {formatTime()}</Text>

        {/* Timer Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={startTimer}>
            <Text style={styles.buttonText}>Start Timer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={pauseTimer}>
            <Text style={styles.buttonText}>Pause Timer</Text>
          </TouchableOpacity>
        </View>

        {/* Yoga Pose Image */}
        <Image
          source={require('../assets/Ardhamat.jpg')} // Add image in assets
          style={styles.poseImage}
          resizeMode="cover"
        />

        {/* Importance */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🌟 Importance</Text>
          <Text style={styles.cardText}>
            Ardha Matsyendrasana is a powerful seated twist that stimulates digestion and spinal flexibility while grounding the body.
          </Text>
        </View>

        {/* How to Perform */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🧘‍♀ How to Perform</Text>
          <Text style={styles.cardText}>
            Sit with your legs extended. Bend your right knee and place the foot outside your left thigh. Fold the left leg under or keep it extended. Place your right hand behind you and your left elbow outside the right knee. Inhale to lengthen, exhale to twist.
          </Text>
        </View>

        {/* Benefits */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>💖 Benefits</Text>
          <Text style={styles.cardText}>
            - Improves spinal mobility and flexibility{'\n'}
            - Stimulates liver and kidneys{'\n'}
            - Enhances digestion and detoxification{'\n'}
            - Relieves tension in the back and shoulders
          </Text>
        </View>

      </ScrollView>
    </ImageBackground>
  );
};

export default ArdhaMatsyendrasanaScreen;

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