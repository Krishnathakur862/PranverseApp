import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Profile</Text>

      {/* Profile Image */}
      <View style={styles.profileImagePlaceholder}>
        <Image
          source={require('../assets/krish2.jpg')} 
          style={styles.profileImage}
        />
      </View>

      
      <View style={styles.infoCard}>
        <Text style={styles.infoLabel}> Name</Text>
        <Text style={styles.infoValue}>Krishna Thakur</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoLabel}>Email</Text>
        <Text style={styles.infoValue}>krishnavthakur7@gmail.com</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoLabel}>Date of Birth</Text>
        <Text style={styles.infoValue}> 7 September 2007</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoLabel}>Time of Birth</Text>
        <Text style={styles.infoValue}>00000</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoLabel}>Birth Place</Text>
        <Text style={styles.infoValue}>Yeola</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoLabel}>Mulank</Text>
        <Text style={styles.infoValue}>12</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoLabel}>Bhagank</Text>
        <Text style={styles.infoValue}>32</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoLabel}>zodiac Sign</Text>
        <Text style={styles.infoValue}>fbgkjd</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoLabel}>Gender</Text>
        <Text style={styles.infoValue}>female</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoLabel}>Nakshatra</Text>
        <Text style={styles.infoValue}>bjffk</Text>
      </View>

     
      
      {/* Edit Profile button */}
      <TouchableOpacity
        style={styles.editButton}
        activeOpacity={0.8}
        onPress={() => alert('Edit Profile clicked')}
      >
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFBEF',
    alignItems: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#B88A3B',
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
    backgroundColor: 'rgba(255,255,255,0.95)',
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#B88A3B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7A7A7A',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3C3C3C',
  },
  editButton: {
    marginTop: 20,
    backgroundColor: '#F6AFAF',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: '#F6AFAF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
