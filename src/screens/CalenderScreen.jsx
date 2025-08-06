import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
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

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [pickerDate, setPickerDate] = useState(new Date());

  const onCalendarDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const onDateChange = (event, date) => {
    setShowPicker(false);
    if (date) {
      const isoDate = date.toISOString().split('T')[0]; 
      setPickerDate(date);
      setSelectedDate(isoDate);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🗓 Rituals & Astrology Calendar</Text>

      <Button
        title="Select Date (Day / Month / Year)"
        onPress={() => setShowPicker(true)}
        color="#B88A3B"
      />

      {showPicker && (
        <DateTimePicker
          value={pickerDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onDateChange}
        />
      )}

      <Calendar
        onDayPress={onCalendarDayPress}
        markedDates={{
          ...Object.fromEntries(
            Object.entries(festivalData).map(([date]) => [
              date,
              { marked: true, dotColor: '#B88A3B' },
            ])
          ),
          ...(selectedDate && {
            [selectedDate]: {
              selected: true,
              selectedColor: '#B88A3B',
              selectedTextColor: 'white',
              marked: festivalData[selectedDate] !== undefined,
              dotColor: '#fff',
            },
          }),
        }}
        current={selectedDate || undefined}
        theme={{
          backgroundColor: '#FFFBEF',
          calendarBackground: '#FFFBEF',
          todayTextColor: '#B88A3B',
          arrowColor: '#B88A3B',
          textSectionTitleColor: '#444',
          selectedDayBackgroundColor: '#B88A3B',
          selectedDayTextColor: '#fff',
          monthTextColor: '#B88A3B',
          textMonthFontWeight: 'bold',
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 14,
        }}
      />

      {selectedDate !== '' && (
        <View style={styles.dateInfo}>
          <Text style={styles.dateText}>📅 Selected Date: {selectedDate}</Text>
          {festivalData[selectedDate] ? (
            <View style={styles.festivalBox}>
              <Text style={styles.festivalHeader}>🎉 Festival(s):</Text>
              {festivalData[selectedDate].map((festival, index) => (
                <Text key={index} style={styles.festivalText}>• {festival}</Text>
              ))}
            </View>
          ) : (
            <Text style={styles.noFestivalText}>No festivals on this day.</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBEF',
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#B88A3B',
    marginBottom: 10,
    textAlign: 'center',
  },
  dateInfo: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  festivalBox: {
    marginTop: 10,
  },
  festivalHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#B88A3B',
    marginBottom: 5,
  },
  festivalText: {
    fontSize: 15,
    color: '#444',
    paddingLeft: 8,
  },
  noFestivalText: {
    fontSize: 14,
    color: '#999',
  },
});