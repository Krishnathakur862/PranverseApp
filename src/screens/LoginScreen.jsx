// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ImageBackground,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   Modal
// } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [secureEntry, setSecureEntry] = useState(true);
//   const [errors, setErrors] = useState({ email: '', password: '' });
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalMsg, setModalMsg] = useState('');

//   const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

//   const validate = () => {
//     let valid = true;
//     let newErrors = { email: '', password: '' };

//     if (!email.trim()) {
//       newErrors.email = 'Email is required.';
//       valid = false;
//     } else if (!isValidEmail(email)) {
//       newErrors.email = 'Enter a valid email address.';
//       valid = false;
//     }

//     if (!password.trim()) {
//       newErrors.password = 'Password is required.';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleLogin = async () => {
//     if (!validate()) return;

//     try {
//       const userCredential = await auth().signInWithEmailAndPassword(email, password);
//       navigation.navigate('ReadyToHeal', {
//         email: userCredential.user.email,
//         uid: userCredential.user.uid,
//       });
//     } catch (error) {
//       if (error.code === 'auth/user-not-found') {
//         setErrors(prev => ({ ...prev, email: 'No user found with this email.' }));
//       } else if (error.code === 'auth/wrong-password') {
//         setErrors(prev => ({ ...prev, password: 'Incorrect password.' }));
//       } else if (error.code === 'auth/invalid-email') {
//         setErrors(prev => ({ ...prev, email: 'Invalid email address.' }));
//       } else {
//         setModalMsg('Login failed: ' + error.message);
//         setModalVisible(true);
//       }
//     }
//   };

//   return (
//     <ImageBackground
//       source={require('../assets/bg2.jpg')}
//       style={styles.bg}
//     >
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//         style={{ flex: 1 }}
//       >
//         <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
//           <Text style={styles.title}>Login to Pranverse</Text>

//           <View style={styles.container}>
//             {/* Email Input */}
//             <View style={styles.inputWrapper}>
//               <FontAwesome name="envelope" size={18} color="#888" style={styles.icon} />
//               <TextInput
//                 placeholder="Email"
//                 value={email}
//                 onChangeText={(text) => {
//                   setEmail(text);
//                   setErrors({ ...errors, email: '' });
//                 }}
//                 style={styles.input}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//                 placeholderTextColor="#888"
//               />
//             </View>
//             {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

//             {/* Password Input */}
//             <View style={styles.inputWrapper}>
//               <FontAwesome name="lock" size={20} color="#888" style={styles.icon} />
//               <TextInput
//                 placeholder="Password"
//                 value={password}
//                 onChangeText={(text) => {
//                   setPassword(text);
//                   setErrors({ ...errors, password: '' });
//                 }}
//                 style={styles.input}
//                 secureTextEntry={secureEntry}
//                 placeholderTextColor="#888"
//               />
//               <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
//                 <FontAwesome
//                   name={secureEntry ? 'eye-slash' : 'eye'}
//                   size={20}
//                   color="#888"
//                 />
//               </TouchableOpacity>
//             </View>
//             {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

//             {/* Forgot Password */}
//             <TouchableOpacity onPress={() => console.log('Forgot password pressed.')}>
//               <Text style={styles.forgotText}>Forgot Password?</Text>
//             </TouchableOpacity>

//             {/* Login Button */}
//             <TouchableOpacity style={styles.button} onPress={handleLogin}>
//               <Text style={styles.buttonText}>Login</Text>
//             </TouchableOpacity>

//             {/* Signup Prompt */}
//             <View style={styles.signupRow}>
//               <Text style={styles.linkText}>Don't have an account? </Text>
//               <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//                 <Text style={styles.signupLink}>Sign up</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ScrollView>

//         {/* Skip Button */}
//         <TouchableOpacity
//           style={styles.skipButton}
//           onPress={() => navigation.navigate('Signup')}
//         >
//           <Text style={styles.buttonText}>Skip</Text>
//         </TouchableOpacity>

//         {/* Error Modal */}
//         <Modal
//           animationType="fade"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContainer}>
//               <Text style={styles.modalTitle}>Login Error</Text>
//               <Text style={styles.modalMessage}>{modalMsg || 'Something went wrong. Please try again.'}</Text>
//               <TouchableOpacity
//                 onPress={() => setModalVisible(false)}
//                 style={styles.modalButton}
//               >
//                 <Text style={styles.modalButtonText}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       </KeyboardAvoidingView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   bg: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   container: {
//     padding: 24,
//     backgroundColor: 'rgba(82, 70, 70, 0.3)',
//     marginHorizontal: 20,
//     borderRadius: 16,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#ffffffff',
//     marginBottom: 24,
//     textAlign: 'center',
//     textShadowColor: '#0002',
//   },
//   inputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fbf8f8ff',
//     borderRadius: 12,
//     marginBottom: 16,
//     paddingHorizontal: 12,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     fontSize: 16,
//     color: '#333',
//   },
//   error: {
//     color: '#e53935',
//     fontSize: 13,
//     marginBottom: 8,
//     marginLeft: 4,
//   },
//   button: {
//     backgroundColor: '#5c51baff',
//     paddingVertical: 14,
//     borderRadius: 30,
//     alignItems: 'center',
//     marginTop: 10,
//     elevation: 3,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   forgotText: {
//     color: '#ffff',
//     textAlign: 'center',
//     marginBottom: 12,
//     fontSize: 13,
//   },
//   signupRow: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 16,
//   },
//   linkText: {
//     color: '#ffff',
//     fontSize: 14,
//   },
//   signupLink: {
//     color: '#e0dcd5ff',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   skipButton: {
//     position: 'absolute',
//     right: 20,
//     bottom: 40,
//     backgroundColor: '#5c51baff',
//     paddingVertical: 14,
//     paddingHorizontal: 28,
//     borderRadius: 30,
//     elevation: 3,
//   },
  
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     width: '80%',
//     minHeight: 160,
//     backgroundColor: '#fff',
//     borderRadius: 18,
//     padding: 24,
//     alignItems: 'center',
//     elevation: 10,
//     shadowColor: '#000',
    
//   },
//   modalTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#c02e2e',
//     marginBottom: 12,
//     textAlign: 'center',
//   },
//   modalMessage: {
//     fontSize: 15,
//     color: '#332c2c',
//     textAlign: 'center',
//     marginBottom: 20,
//     lineHeight: 21,
//   },
//   modalButton: {
//     marginTop: 10,
//     backgroundColor: '#5c51baff',
//     borderRadius: 20,
//     paddingVertical: 8,
//     paddingHorizontal: 28,
//   },
//   modalButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 15,
//     letterSpacing: 0.8,
//   },
// });

import React, { useState, useEffect } from 'react';
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
  Modal,
  ActivityIndicator
} from 'react-native';
import auth from '@react-native-firebase/auth';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMsg, setModalMsg] = useState('');
  const [checkingAuth, setCheckingAuth] = useState(true); // NEW

  // 🔐 Check if user is already logged in
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('ReadyToHeal', {
          email: user.email,
          uid: user.uid,
        });
      } else {
        setCheckingAuth(false); // show form if not logged in
      }
    });

    return unsubscribe;
  }, []);

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
      navigation.replace('ReadyToHeal', {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      });
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setErrors(prev => ({ ...prev, email: 'No user found with this email.' }));
      } else if (error.code === 'auth/wrong-password') {
        setErrors(prev => ({ ...prev, password: 'Incorrect password.' }));
      } else if (error.code === 'auth/invalid-email') {
        setErrors(prev => ({ ...prev, email: 'Invalid email address.' }));
      } else {
        setModalMsg('Login failed: ' + error.message);
        setModalVisible(true);
      }
    }
  };

  // 🔄 Show loader while checking auth
  if (checkingAuth) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
        <ActivityIndicator size="large" color="#ffffff" />
        <Text style={{ marginTop: 10, color: '#fff' }}>Checking login status...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
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

        {/* Error Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Login Error</Text>
              <Text style={styles.modalMessage}>{modalMsg || 'Something went wrong. Please try again.'}</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    backgroundColor: 'rgba(82, 70, 70, 0.3)',
    marginHorizontal: 20,
    borderRadius: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffffff',
    marginBottom: 24,
    textAlign: 'center',
    textShadowColor: '#0002',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fbf8f8ff',
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
  button: {
    backgroundColor: '#5c51baff',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  forgotText: {
    color: '#ffff',
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
    color: '#ffff',
    fontSize: 14,
  },
  signupLink: {
    color: '#e0dcd5ff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  skipButton: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    backgroundColor: '#5c51baff',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    elevation: 3,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    minHeight: 160,
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 24,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#c02e2e',
    marginBottom: 12,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 15,
    color: '#332c2c',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 21,
  },
  modalButton: {
    marginTop: 10,
    backgroundColor: '#5c51baff',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 28,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.8,
  },
});
