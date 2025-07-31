import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
  const [errors, setErrors] = useState({ username: '', email: '', password: '' });

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validate = () => {
    let valid = true;
    let newErrors = { username: '', email: '', password: '' };

    if (!username.trim()) {
      newErrors.username = 'Username is required.';
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Invalid email address.';
      valid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required.';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignup = async () => {
  if (!validate()) return;

  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    console.log('User created:', userCredential.user);

    // You can also save the username to Firebase Realtime Database or Firestore if needed.

    navigation.navigate('Login');
  } catch (error) {
    console.log(error);
    if (error.code === 'auth/email-already-in-use') {
      setErrors(prev => ({ ...prev, email: 'This email is already in use.' }));
    } else if (error.code === 'auth/invalid-email') {
      setErrors(prev => ({ ...prev, email: 'Invalid email address.' }));
    } else {
      Alert.alert('Signup Error', error.message);
    }
  }
};


  return (
    <ImageBackground
      source={require('../assets/welcome-bg.jpg')}
      style={styles.bg}
    >
      <Text style={styles.title}>Create Account</Text>

      <View style={styles.container}>
        {/* Username Input */}
        <View style={styles.inputWrapper}>
          <FontAwesome name="user" size={20} color="#666" style={styles.icon} />
          <TextInput
            placeholder="Create Username"
            value={username}
            onChangeText={(text) => {
              setUsername(text);
              setErrors({ ...errors, username: '' });
            }}
            style={styles.input}
            autoCapitalize="none"
            placeholderTextColor="#999"
          />
        </View>
        {errors.username ? <Text style={styles.error}>{errors.username}</Text> : null}

        {/* Email Input */}
        <View style={styles.inputWrapper}>
          <FontAwesome name="envelope" size={18} color="#666" style={styles.icon} />
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setErrors({ ...errors, email: '' });
            }}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#999"
          />
        </View>
        {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

        {/* Password Input */}
        <View style={styles.inputWrapper}>
          <FontAwesome name="lock" size={20} color="#666" style={styles.icon} />
          <TextInput
            placeholder="Create a Strong Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setErrors({ ...errors, password: '' });
            }}
            style={styles.input}
            secureTextEntry={secureEntry}
            placeholderTextColor="#999"
          />
          <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
            <FontAwesome
              name={secureEntry ? 'eye-slash' : 'eye'}
              size={20}
              color="#666"
              style={{ paddingHorizontal: 8 }}
            />
          </TouchableOpacity>
        </View>
        {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

        {/* Terms */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>By creating an account, I agree to </Text>
          <TouchableOpacity onPress={() => console.log('Show terms pressed')}>
            <Text style={styles.termsLink}>Terms and Conditions</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Login Redirect */}
        <Text
          style={styles.loginText}
          onPress={() => navigation.navigate('Login')}
        >
          Already have an account? Login
        </Text>
      </View>

      {/* Skip Button */}
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate('ReadyToHeal')}
      >
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#B88A3B',
    textAlign: 'center',
    marginBottom: 20,
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 12,
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
  termsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  termsText: {
    color: '#555',
    fontSize: 13,
  },
  termsLink: {
    color: '#ba7c11ff',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#F6AFAF',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  loginText: {
    color: '#141414ff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 6,
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