
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  ScrollView,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';

const festivalData = {
  '2025-08-01': ['Nag Panchami'],
  '2025-08-02': ['Sankashti Chaturthi'],
  '2025-08-04': ['Friendship Day'],
  '2025-08-15': ['Independence Day'],
  '2025-08-19': ['Raksha Bandhan'],
  '2025-08-26': ['Janmashtami'],
};

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [pickerDate, setPickerDate] = useState(new Date());
  const [dailyMessage, setDailyMessage] = useState('');
  const [loadingMessage, setLoadingMessage] = useState(false);

  const fetchDailyMessage = async (date) => {
    try {
      setLoadingMessage(true);
      // Example API (replace with your actual endpoint)
      const res = await fetch(`https://zenquotes.io/api/random`);
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setDailyMessage(`${data[0].q} — ${data[0].a}`);
      } else {
        setDailyMessage('No special message today.');
      }
    } catch (error) {
      console.error('Error fetching daily message:', error);
      setDailyMessage('Could not load message.');
    } finally {
      setLoadingMessage(false);
    }
  };

  useEffect(() => {
    // Fetch message for current date on mount
    fetchDailyMessage(new Date());
  }, []);

  const onCalendarDayPress = (day) => {
    setSelectedDate(day.dateString);
    fetchDailyMessage(day.dateString);
  };

  const onDateChange = (event, date) => {
    setShowPicker(false);
    if (date) {
      const isoDate = date.toISOString().split('T')[0];
      setPickerDate(date);
      setSelectedDate(isoDate);
      fetchDailyMessage(isoDate);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>🗓 Rituals & Astrology Calendar</Text>

        <View style={styles.card}>
          <Button
            title="Select Date (Day / Month / Year)"
            onPress={() => setShowPicker(true)}
            color="#FFD700"
          />
        </View>

        {showPicker && (
          <DateTimePicker
            value={pickerDate}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onDateChange}
          />
        )}

        <View style={styles.card}>
          <Calendar
            onDayPress={onCalendarDayPress}
            markedDates={{
              ...Object.fromEntries(
                Object.entries(festivalData).map(([date]) => [
                  date,
                  { marked: true, dotColor: '#FFD700' },
                ])
              ),
              ...(selectedDate && {
                [selectedDate]: {
                  selected: true,
                  selectedColor: '#FFD700',
                  selectedTextColor: '#333',
                  marked: festivalData[selectedDate] !== undefined,
                  dotColor: '#fff',
                },
              }),
            }}
            current={selectedDate || undefined}
            theme={{
  calendarBackground: 'rgba(0,0,0,0.5)',
  todayTextColor: '#B88A3B',
  dayTextColor: '#ffffffff', 
  textDisabledColor: '#999', 
  arrowColor: '#FFD700',
  monthTextColor: '#FFD700',
  selectedDayBackgroundColor: '#FFD700',
  selectedDayTextColor: '#fff',
  textMonthFontWeight: 'bold',
  textDayFontSize: 16,
  textMonthFontSize: 18,
  textDayHeaderFontSize: 14,
}}

          />
        </View>

        {loadingMessage ? (
          <ActivityIndicator color="#FFD700" style={{ marginTop: 20 }} />
        ) : (
          dailyMessage && (
            <View style={styles.card}>
              <Text style={styles.subheading}>🔮 Daily Message</Text>
              <Text style={styles.messageText}>{dailyMessage}</Text>
            </View>
          )
        )}

        {selectedDate !== '' && (
          <View style={styles.card}>
            <Text style={styles.subheading}>📅 Selected Date: {selectedDate}</Text>
            {festivalData[selectedDate] ? (
              <View style={styles.festivalBox}>
                <Text style={styles.festivalHeader}>🎉 Festival(s):</Text>
                {festivalData[selectedDate].map((festival, index) => (
                  <Text key={index} style={styles.festivalText}>
                    • {festival}
                  </Text>
                ))}
              </View>
            ) : (
              <Text style={styles.noFestivalText}>No festivals on this day.</Text>
            )}
          </View>
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
    paddingBottom: 80,
  },
  header: {
    fontSize: 24,
    color: '#ffffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 15,
    padding: 16,
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    color: '#ffffffff',
    marginBottom: 8,
    fontWeight: '600',
  },
  messageText: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 20,
  },
  festivalBox: {
    marginTop: 10,
  },
  festivalHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFD700',
    marginBottom: 5,
  },
  festivalText: {
    fontSize: 15,
    color: '#fff',
    paddingLeft: 8,
  },
  noFestivalText: {
    fontSize: 14,
    color: '#ccc',
  },
});
