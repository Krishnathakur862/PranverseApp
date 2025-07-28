{/*}

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (email && password && confirmPassword) {
      if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match');
        return;
      }

      Alert.alert('Signup Successful', `Welcome, ${email}!`);
      navigation.navigate('Login');
    } else {
      Alert.alert('Error', 'Please fill all fields');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/welcome-bg.jpg')}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Create Account</Text>

        <View style={styles.inputContainer}>
          <Icon name="email" size={20} color="#B88A3B" style={styles.icon} />
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#999"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#B88A3B" style={styles.icon} />
          <TextInput
            placeholder="Create a password"
            placeholderTextColor="#999"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock-outline" size={20} color="#B88A3B" style={styles.icon} />
          <TextInput
            placeholder="Confirm your password"
            placeholderTextColor="#999"
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inner: {
    paddingHorizontal: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    margin: 20,
    borderRadius: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 28,
    color: '#B88A3B',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    color: '#333',
  },
  button: {
    backgroundColor: '#B88A3B',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    textAlign: 'center',
    color: '#444',
    textDecorationLine: 'underline',
  },
});*/}

import React, { useState } from 'react';
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

  const handleSignup = () => {
    if (!validate()) return;

    console.log(`User signed up: ${username}, ${email}`);
    navigation.navigate('Login');
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

