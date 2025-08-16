import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { useFocusEffect } from '@react-navigation/native';

export default function ProfileScreen({ navigation }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const fetchUserData = async () => {
        const currentUser = auth().currentUser;
        if (currentUser) {
          const snapshot = await database()
            .ref(`/users/${currentUser.uid}`)
            .once('value');
          const data = snapshot.val();
          if (data) {
            setUserData(data);
          }
        }
        setLoading(false);
      };

      fetchUserData();
    }, [])
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#B88A3B" style={{ flex: 1 }} />;
  }

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Your Profile</Text>

        <View style={styles.card}>
          <View style={styles.profileImagePlaceholder}>
            <Image
              source={
                userData?.profileImage
                  ? { uri: userData.profileImage }
                  : require('../assets/meditation.jpg')
              }
              style={styles.profileImage}
            />
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Name</Text>
            <Text style={styles.infoValue}>{userData?.username || 'N/A'}</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>{userData?.email || 'N/A'}</Text>
          </View>

          <TouchableOpacity
            style={styles.editButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  profileImagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#c2964aff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  infoCard: {
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ccc',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  editButton: {
    marginTop: 30,
    backgroundColor: '#5c51baff',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  editButtonText: {
    color: '#ffffffff',
    fontWeight: '700',
    fontSize: 16,
  },
});
