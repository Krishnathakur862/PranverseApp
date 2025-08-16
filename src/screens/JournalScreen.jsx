import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function JournalScreen() {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      const saved = await AsyncStorage.getItem('ritualJournal');
      if (saved) {
        setEntries(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Failed to load journal entries:', error);
    }
  };

  const formatDate = (date) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
return `${month} ${day}, ${year}`;
  };

  const saveEntry = async () => {
    if (!entry.trim()) return;

    const newEntry = {
      text: entry,
      date: formatDate(new Date()), // ✅ human-readable date
      timestamp: Date.now(),
    };

    const updatedEntries = [newEntry, ...entries];

    try {
      await AsyncStorage.setItem('ritualJournal', JSON.stringify(updatedEntries));
      setEntries(updatedEntries);
      setEntry('');
      Alert.alert('Saved', 'Your ritual reflection has been saved.');
    } catch (error) {
      console.error('Failed to save entry:', error);
    }
  };

  const deleteEntry = async (timestampToDelete) => {
    const filtered = entries.filter(e => e.timestamp !== timestampToDelete);
    try {
      await AsyncStorage.setItem('ritualJournal', JSON.stringify(filtered));
      setEntries(filtered);
    } catch (error) {
      console.error('Failed to delete entry:', error);
    }
  };

  return (
    <ImageBackground source={require('../assets/bg2.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>✍ Personal Ritual Journal</Text>

        <View style={styles.card}>
          <Text style={styles.label}>What did you release this Full Moon?</Text>
          <TextInput
            style={styles.input}
            multiline
            placeholder="Write your reflection..."
            placeholderTextColor="#ccc"
            value={entry}
            onChangeText={setEntry}
          />
          <TouchableOpacity style={styles.button} onPress={saveEntry}>
            <Text style={styles.buttonText}>Save Entry</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subheading}>📜 Past Reflections</Text>

        {entries.length === 0 ? (
          <Text style={styles.noEntry}>No entries yet. Write something!</Text>
        ) : (
          entries.map((e) => (
            <View key={e.timestamp} style={styles.entryCard}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryDate}>{e.date}</Text>
                <TouchableOpacity onPress={() => deleteEntry(e.timestamp)}>
                  <Text style={styles.deleteText}>🗑</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.entryText}>{e.text}</Text>
            </View>
          ))
        )}
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
    paddingBottom: 50,
    
  },
  heading: {
    fontSize: 24,
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 20,  
  },
  card: {
    backgroundColor: '#ffffff20',
    borderRadius: 15,
    padding: 16,
    marginBottom: 30,
  },
  label: {
    color: '#fff',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    color: '#fff',
    height: 100,
    textAlignVertical: 'top',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    fontWeight: '600',
  },
  noEntry: {
    color: '#ccc',
    fontStyle: 'italic',
  },
  entryCard: {
    backgroundColor: '#ffffff15',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  entryDate: {
    color: '#FFD700',
    fontSize: 13,
  },
  deleteText: {
    fontSize: 16,
    color: '#ff6666',
  },
  entryText: {
    color: '#fff',
    lineHeight: 20,
  },
});