
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';

const EditProfile = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [dob, setDob] = useState('');
  const [tob, setTob] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [mulank, setMulank] = useState('');
  const [bhagank, setBhagank] = useState('');
  const [zodiac, setZodiac] = useState('');
  const [gender, setGender] = useState('');
  const [nakshatra, setNakshatra] = useState('');

  useEffect(() => {
    const user = {
      fullName: '',
      email: '',
      phone: '',
      bio: '',
      dob: '',
      tob: '',
      birthPlace: '',
      mulank: '',
      bhagank: '',
      zodiac: '',
      gender: '',
      nakshatra: '',
    };
    setFullName(user.fullName);
    setEmail(user.email);
    setPhone(user.phone);
    setBio(user.bio);
    setDob(user.dob);
    setTob(user.tob);
    setBirthPlace(user.birthPlace);
    setMulank(user.mulank);
    setBhagank(user.bhagank);
    setZodiac(user.zodiac);
    setGender(user.gender);
    setNakshatra(user.nakshatra);
  }, []);

  const handleSave = () => {
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      Alert.alert('Error', 'Please fill out all required fields');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

    Alert.alert('Success', 'Profile Updated', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  const renderCard = (label, value, setter, placeholder, keyboardType = 'default', multiline = false) => (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, multiline && styles.bioInput]}
        placeholder={placeholder}
        value={value}
        onChangeText={setter}
        placeholderTextColor="#999"
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={multiline ? 4 : 1}
        accessibilityLabel={label}
      />
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFBEF' }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Edit Profile</Text>

        {renderCard('Full Name', fullName, setFullName, 'Enter your full name')}
        {renderCard('Email', email, setEmail, 'Enter your email', 'email-address')}
        {renderCard('Phone', phone, setPhone, 'Enter your phone number', 'phone-pad')}
        {renderCard('Bio', bio, setBio, 'Write a short bio...', 'default', true)}

        {renderCard('Date of Birth', dob, setDob, 'DD/MM/YYYY')}
        {renderCard('Time of Birth', tob, setTob, 'HH:MM AM/PM')}
        {renderCard('Birth Place', birthPlace, setBirthPlace, 'Enter your birth place')}
        {renderCard('Mulank', mulank, setMulank, 'Enter Mulank (Root Number)', 'numeric')}
        {renderCard('Bhagank', bhagank, setBhagank, 'Enter Bhagank (Destiny Number)', 'numeric')}
        {renderCard('Zodiac Sign', zodiac, setZodiac, 'Enter your zodiac sign')}
        {renderCard('Gender', gender, setGender, 'Enter gender (Male/Female/Other)')}
        {renderCard('Nakshatra', nakshatra, setNakshatra, 'Enter your nakshatra')}

        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSave}
          accessibilityLabel="Save Profile"
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

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
    marginBottom: 20,
  },
  card: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.95)',
    padding: 16,
    borderRadius: 14,
    marginBottom: 20,
    shadowColor: '#B88A3B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top',
    fontSize: 15,
  },
  saveButton: {
    marginTop: 10,
    backgroundColor: '#F6AFAF',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#F6AFAF',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 3,
    width: '100%',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
