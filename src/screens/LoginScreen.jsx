import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validate = () => {
    let valid = true;
    let newErrors = { email: '', password: '' };

    if (!email.trim()) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Enter a valid email address.';
      valid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = async () => {
  if (!validate()) return;

  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    console.log('Login successful:', userCredential.user);

    // You can pass user data if needed
    navigation.navigate('ReadyToHeal', {
      email: userCredential.user.email,
      uid: userCredential.user.uid,
    });
  } catch (error) {
    console.log(error);

    if (error.code === 'auth/user-not-found') {
      setErrors(prev => ({ ...prev, email: 'No user found with this email.' }));
    } else if (error.code === 'auth/wrong-password') {
      setErrors(prev => ({ ...prev, password: 'Incorrect password.' }));
    } else if (error.code === 'auth/invalid-email') {
      setErrors(prev => ({ ...prev, email: 'Invalid email address.' }));
    } else {
      // For any other errors
      alert('Login Error: ' + error.message);
    }
  }
};


  return (
    <ImageBackground
      source={require('../assets/welcome-bg.jpg')}
      style={styles.bg}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <Text style={styles.title}>Login to Pranverse</Text>

          <View style={styles.container}>

            {/* Email Input */}
            <View style={styles.inputWrapper}>
              <FontAwesome name="envelope" size={18} color="#888" style={styles.icon} />
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setErrors({ ...errors, email: '' });
                }}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#888"
              />
            </View>
            {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

            {/* Password Input */}
            <View style={styles.inputWrapper}>
              <FontAwesome name="lock" size={20} color="#888" style={styles.icon} />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setErrors({ ...errors, password: '' });
                }}
                style={styles.input}
                secureTextEntry={secureEntry}
                placeholderTextColor="#888"
              />
              <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
                <FontAwesome
                  name={secureEntry ? 'eye-slash' : 'eye'}
                  size={20}
                  color="#888"
                />
              </TouchableOpacity>
            </View>
            {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

            {/* Forgot Password */}
            <TouchableOpacity onPress={() => console.log('Forgot password pressed.')}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* Signup Prompt */}
            <View style={styles.signupRow}>
              <Text style={styles.linkText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signupLink}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* Skip Button */}
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 24,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 20,
    borderRadius: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#B88A3B',
    marginBottom: 24,
    textAlign: 'center',
    textShadowColor: '#0002',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  error: {
    color: '#e53935',
    fontSize: 13,
    marginBottom: 8,
    marginLeft: 4,
  },
  button: {
    backgroundColor: '#F6AFAF',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#F6AFAF',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  forgotText: {
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
    fontSize: 13,
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  linkText: {
    color: '#333',
    fontSize: 14,
  },
  signupLink: {
    color: '#B88A3B',
    fontSize: 14,
    fontWeight: 'bold',
  },
  skipButton: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    backgroundColor: '#F6AFAF',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    shadowColor: '#F6AFAF',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 3,
  },
});