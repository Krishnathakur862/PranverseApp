// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   ImageBackground,
//   Modal,
// } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import database from '@react-native-firebase/database';
// import storage from '@react-native-firebase/storage';
// import { launchImageLibrary } from 'react-native-image-picker';

// export default function EditProfile({ navigation }) {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [profileImage, setProfileImage] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const currentUser = auth().currentUser;
//       if (currentUser) {
//         const snapshot = await database().ref(`/users/${currentUser.uid}`).once('value');
//         const data = snapshot.val();
//         if (data) {
//           setUsername(data.username || '');
//           setEmail(data.email || '');
//           setProfileImage(data.profileImage || null);
//         }
//       }
//       setLoading(false);
//     };
//     fetchUserData();
//   }, []);

//   const handleImagePick = async () => {
//     launchImageLibrary({ mediaType: 'photo' }, async (response) => {
//       if (response.didCancel || response.errorCode) {
//         setModalMessage('Image selection was cancelled or failed.');
//         setModalVisible(true);
//       } else {
//         const asset = response.assets[0];
//         const imageUri = asset.uri;

//         const filename = `profileImages/${auth().currentUser.uid}.jpg`;
//         const reference = storage().ref(filename);
//         await reference.putFile(imageUri);
//         const url = await reference.getDownloadURL();

//         setProfileImage(url);
//       }
//     });
//   };

//   const handleUpdate = async () => {
//     const currentUser = auth().currentUser;
//     if (!username || !email) {
//       setModalMessage('Please fill all fields.');
//       setModalVisible(true);
//       return;
//     }

//     try {
//       await database().ref(`/users/${currentUser.uid}`).update({
//         username,
//         email,
//         profileImage: profileImage || null,
//       });

//       setModalMessage('Profile updated successfully!');
//       setModalVisible(true);
//     } catch (error) {
//       console.error(error);
//       setModalMessage('Failed to update profile.');
//       setModalVisible(true);
//     }
//   };

//   return (
//     <ImageBackground
//       source={require('../assets/bg2.jpg')}
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.title}>Edit Profile</Text>

//         <View style={styles.card}>
//           <TouchableOpacity onPress={handleImagePick}>
//             <Image
//               source={profileImage ? { uri: profileImage } : require('../assets/meditation.jpg')}
//               style={styles.profileImage}
//             />
//             <Text style={styles.imageHint}>Tap image to change</Text>
//           </TouchableOpacity>

//           <Text style={styles.label}>Username</Text>
//           <TextInput
//             value={username}
//             onChangeText={setUsername}
//             placeholder="Enter your name"
//             placeholderTextColor="#ccc"
//             style={styles.input}
//           />

//           <Text style={styles.label}>Email</Text>
//           <TextInput
//             value={email}
//             onChangeText={setEmail}
//             placeholder="Enter your email"
//             placeholderTextColor="#ccc"
//             style={styles.input}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />

//           <TouchableOpacity style={styles.saveButton} onPress={handleUpdate}>
//             <Text style={styles.saveButtonText}>Save Changes</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>

//       {/* Modal */}
//       <Modal
//         animationType="fade"
//         transparent
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalTitle}>Notice</Text>
//             <Text style={styles.modalText}>{modalMessage}</Text>
//             <View style={styles.modalButtons}>
//               <TouchableOpacity
//                 style={styles.modalButton}
//                 onPress={() => {
//                   setModalVisible(false);
//                   if (modalMessage === 'Profile updated successfully!') {
//                     navigation.goBack();
//                   }
//                 }}
//               >
//                 <Text style={styles.modalButtonText}>OK</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   container: {
//     padding: 20,
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   card: {
//     backgroundColor: 'rgba(57, 54, 54, 0.3)',
//     padding: 20,
//     borderRadius: 16,
//     shadowColor: '#000',
//     marginTop: 40,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     alignSelf: 'center',
//     marginBottom: 10,
//     backgroundColor: '#ccc',
//   },
//   imageHint: {
//     textAlign: 'center',
//     color: '#ddd',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 6,
//     color: '#fff',
//   },
//   input: {
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderRadius: 12,
//     fontSize: 16,
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: '#999',
//     color: '#fff',
//   },
//   saveButton: {
//     backgroundColor: '#5c51baff',
//     paddingVertical: 14,
//     borderRadius: 30,
//     alignItems: 'center',
//     shadowColor: '#F6AFAF',
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.6,
//     shadowRadius: 8,
//   },
//   saveButtonText: {
//     color: '#fff',
//     fontWeight: '700',
//     fontSize: 16,
//   },
//   // Modal styles
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     width: '85%',
//     backgroundColor: '#d1cdebff',
//     borderRadius: 20,
//     padding: 24,
//     alignItems: 'center',
//     elevation: 10,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#693c8bff',
//     marginBottom: 10,
//   },
//   modalText: {
//     fontSize: 16,
//     color: '#444',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: 12,
//   },
//   modalButton: {
//     backgroundColor: '#5c51baff',
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 25,
//     alignItems: 'center',
//   },
//   modalButtonText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 16,
//   },
// });

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  Modal,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import { launchImageLibrary } from 'react-native-image-picker';

export default function EditProfile({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Fetch user data when screen loads
  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth().currentUser;
      if (currentUser) {
        const snapshot = await database()
          .ref(`/users/${currentUser.uid}`)
          .once('value');
        const data = snapshot.val();
        if (data) {
          setUsername(data.username || '');
          setEmail(data.email || '');
          setProfileImage(data.profileImage || null);
        }
      }
      setLoading(false);
    };
    fetchUserData();
  }, []);

  // Pick and upload profile image
  const handleImagePick = async () => {
    launchImageLibrary({ mediaType: 'photo' }, async (response) => {
      if (response.didCancel || response.errorCode) {
        setModalMessage('Image selection was cancelled or failed.');
        setModalVisible(true);
      } else {
        try {
          const asset = response.assets[0];
          const imageUri = asset.uri;

          // Firebase Storage path for this user
          const filename = `profileImages/${auth().currentUser.uid}.jpg`;
          const reference = storage().ref(filename);

          // Upload to Storage
          await reference.putFile(imageUri);

          // Get download URL
          const url = await reference.getDownloadURL();

          // Update local state
          setProfileImage(url);

          // Save to Realtime Database immediately
          await database()
            .ref(`/users/${auth().currentUser.uid}`)
            .update({ profileImage: url });

          setModalMessage('Profile image updated successfully!');
          setModalVisible(true);

        } catch (error) {
          console.error(error);
          setModalMessage('Image upload failed.');
          setModalVisible(true);
        }
      }
    });
  };

  // Save username and email changes
  const handleUpdate = async () => {
    const currentUser = auth().currentUser;
    if (!username || !email) {
      setModalMessage('Please fill all fields.');
      setModalVisible(true);
      return;
    }

    try {
      await database()
        .ref(`/users/${currentUser.uid}`)
        .update({
          username,
          email,
          profileImage: profileImage || null,
        });

      setModalMessage('Profile updated successfully!');
      setModalVisible(true);
    } catch (error) {
      console.error(error);
      setModalMessage('Failed to update profile.');
      setModalVisible(true);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Edit Profile</Text>

        <View style={styles.card}>
          <TouchableOpacity onPress={handleImagePick}>
            <Image
              source={profileImage ? { uri: profileImage } : require('../assets/meditation.jpg')}
              style={styles.profileImage}
            />
            <Text style={styles.imageHint}>Tap image to change</Text>
          </TouchableOpacity>

          <Text style={styles.label}>Username</Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Enter your name"
            placeholderTextColor="#ccc"
            style={styles.input}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="#ccc"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleUpdate}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Notice</Text>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(false);
                  if (modalMessage.includes('successfully')) {
                    navigation.goBack();
                  }
                }}
              >
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(57, 54, 54, 0.3)',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    marginTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#ccc',
  },
  imageHint: {
    textAlign: 'center',
    color: '#ddd',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#fff',
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#999',
    color: '#fff',
  },
  saveButton: {
    backgroundColor: '#5c51baff',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#F6AFAF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#d1cdebff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#693c8bff',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  modalButton: {
    backgroundColor: '#5c51baff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
