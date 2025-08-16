import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen({ navigation }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          })
        );
      })
      .catch(error => {
        console.error(error);
        setErrorModalVisible(true);
      });
  };

  const confirmDeleteAccount = () => {
    setModalVisible(true);
  };

  const handleDeleteConfirmed = async () => {
  const currentUser = auth().currentUser;

  if (!currentUser) {
    Alert.alert('Error', 'Something went wrong. Please login again to delete your account.');
    setModalVisible(false);
    return;
  }

  try {
    
    await database().ref(`/users/${currentUser.uid}`).remove();

    
    await currentUser.delete();

    Alert.alert('Account Deleted', 'Your account has been successfully deleted.');
    navigation.replace('LoginScreen'); 

  } catch (error) {
    if (error.code === 'auth/requires-recent-login') {
      Alert.alert(
        'Login Required',
        'For security reasons, please log in again to delete your account.',
        [{ text: 'OK', onPress: () => navigation.replace('LoginScreen') }]
      );
    } else {
      Alert.alert('Error', error.message);
    }
  }

  setModalVisible(false);
};


  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Settings</Text>
        <View style={styles.card}>
          <View style={styles.itemRow}>
            <Icon name="notifications-outline" size={22} color={'white'} />
            <Text style={styles.itemText}>Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={toggleNotifications}
            />
          </View>

          <TouchableOpacity
            style={styles.itemRow}
            onPress={() => navigation.navigate('Terms')}
          >
            <Icon name="document-text-outline" size={22} color={'white'} />
            <Text style={styles.itemText}>Terms & Conditions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemRow} onPress={confirmDeleteAccount}>
            <Icon name="trash-outline" size={22} color="red" />
            <Text style={[styles.itemText]}>Delete Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemRow} onPress={handleLogout}>
            <Icon name="log-out-outline" size={22} color="white" />
            <Text style={[styles.itemText]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Delete Account Modal */}
      <Modal transparent={true} animationType="fade" visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Confirm Delete</Text>
            <Text style={styles.modalText}>
              Are you sure you want to permanently delete your account?
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#888' }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: 'red' }]}
                onPress={handleDeleteConfirmed}
              >
                <Text style={styles.modalButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Error Modal */}
      <Modal transparent={true} animationType="fade" visible={errorModalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Error</Text>
            <Text style={styles.modalText}>
              Something went wrong. Please login again to delete or logout.
            </Text>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: '#5c51baff' }]}
              onPress={() => setErrorModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
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
  },
  card: {
    padding: 20,
    backgroundColor: 'rgba(57, 54, 54, 0.3)',
    borderRadius: 16,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 100,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  itemText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: 'white',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContainer: {
    backgroundColor: '#2c2c2e',
    padding: 25,
    borderRadius: 16,
    width: '100%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
