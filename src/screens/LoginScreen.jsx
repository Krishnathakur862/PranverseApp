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

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      Alert.alert('Login Successful', `Welcome back, ${email}!`);
      navigation.navigate('ReadyToHeal');
    } else {
      Alert.alert('Error', 'Please enter email and password');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/welcome-bg.jpg')}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Welcome Back</Text>

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
            placeholder="Enter your password"
            placeholderTextColor="#999"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}>Don't have an account? Sign up</Text>
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


{/*}

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

  const handleLogin = () => {
    if (!validate()) return;

    // Simulate login success
    console.log(`Login successful for: ${email}`);
    navigation.navigate('ReadyToHeal');
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

           
            <TouchableOpacity onPress={() => console.log('Forgot password pressed.')}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

         
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

         
            <View style={styles.signupRow}>
              <Text style={styles.linkText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signupLink}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
});

*/}

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

  const handleLogin = () => {
    if (!validate()) return;

    // Simulate login success
    console.log(`Login successful for: ${email}`);
    navigation.navigate('ReadyToHeal');
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
