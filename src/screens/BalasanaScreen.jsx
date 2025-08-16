import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,Image
} from 'react-native';

const BalasanaScreen = () => {
  const [seconds, setSeconds] = useState(600); // 10 minutes
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
      source={require('../assets/bg2.jpg')} // Replace with your background
      style={styles.bg}
      blurRadius={2}
    >
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.title}>Balasana (Child’s Pose)</Text>
          <Text style={styles.timer}>🕒 {formatTime()}</Text>

        {/* Start / Pause buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={startTimer}>
            <Text style={styles.buttonText}>Start Timer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={pauseTimer}>
            <Text style={styles.buttonText}>Pause Timer</Text>
          </TouchableOpacity>
        </View>

      <Image
  source={require('../assets/image.jpg')}
  style={styles.poseImage}
  resizeMode="cover"
/>

        {/* Importance */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🌟 Importance</Text>
          <Text style={styles.cardText}>
            Balasana is a deeply restorative pose that calms the mind, relieves fatigue, and connects the body to the breath.
          </Text>
        </View>

        {/* How to Do */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🧘‍♀ How to Perform</Text>
          <Text style={styles.cardText}>
            Kneel on the floor, touch your big toes together, and sit on your heels. Bend forward, resting your torso between your thighs and forehead on the mat. Extend your arms forward or keep them beside your body.
          </Text>
        </View>

        {/* Benefits */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>💖 Benefits</Text>
          <Text style={styles.cardText}>
            - Reduces anxiety and stress{'\n'}
            - Gently stretches hips, thighs, and ankles{'\n'}
            - Relieves back and neck pain{'\n'}
            - Promotes a sense of inner peace and calm
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default BalasanaScreen;

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
  poseImage: {
  width: '100%',
  height: 200,
  borderRadius: 16,
  marginBottom: 20,
},

  buttonText: {
    color: '#f6c90e',
    fontWeight: '600',
    fontSize: 14,
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