import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const years = Array.from({ length: 100 }, (_, i) => 1925 + i);
const months = [
  { label: 'January', value: 1 },
  { label: 'February', value: 2 },
  { label: 'March', value: 3 },
  { label: 'April', value: 4 },
  { label: 'May', value: 5 },
  { label: 'June', value: 6 },
  { label: 'July', value: 7 },
  { label: 'August', value: 8 },
  { label: 'September', value: 9 },
  { label: 'October', value: 10 },
  { label: 'November', value: 11 },
  { label: 'December', value: 12 },
];
const days = Array.from({ length: 31 }, (_, i) => i + 1);

const numberDetails = {
  1: { meaning: "Leader, independent thinker, ambitious and determined.", luckyColors: "Red, Gold", traits: "Confident, self-reliant, visionary", famousPeople: "Martin Luther King Jr., Steve Jobs" },
  2: { meaning: "Diplomatic, cooperative, sensitive, and harmonious.", luckyColors: "White, Cream", traits: "Peacemaker, loyal, supportive", famousPeople: "Mahatma Gandhi, Madonna" },
  3: { meaning: "Creative, optimistic, expressive, and social.", luckyColors: "Yellow, Purple", traits: "Artistic, joyful, inspiring", famousPeople: "Adele, Jackie Chan" },
  4: { meaning: "Practical, disciplined, hard-working, and reliable.", luckyColors: "Green, Brown", traits: "Organized, loyal, methodical", famousPeople: "Bill Gates, Oprah Winfrey" },
  5: { meaning: "Adventurous, freedom-loving, adaptable, and curious.", luckyColors: "Blue, Silver", traits: "Energetic, risk-taker, explorer", famousPeople: "Angelina Jolie, Abraham Lincoln" },
  6: { meaning: "Nurturing, responsible, loving, and family-oriented.", luckyColors: "Pink, Light Blue", traits: "Caring, protective, artistic", famousPeople: "Albert Einstein, Michael Jackson" },
  7: { meaning: "Spiritual, analytical, introspective, and wise.", luckyColors: "Grey, Purple", traits: "Thinker, seeker of truth, introvert", famousPeople: "Leonardo da Vinci, Stephen Hawking" },
  8: { meaning: "Ambitious, powerful, business-minded, and goal-oriented.", luckyColors: "Black, Dark Blue", traits: "Leader, disciplined, strong-willed", famousPeople: "Nelson Mandela, Elon Musk" },
  9: { meaning: "Compassionate, humanitarian, generous, and idealistic.", luckyColors: "Gold, White", traits: "Selfless, generous, emotional", famousPeople: "Mother Teresa, Bob Marley" },
  11: { meaning: "Master Number — Intuitive, spiritual leader, inspirational.", luckyColors: "Silver, Violet", traits: "Visionary, idealistic, mystical", famousPeople: "Barack Obama, Mozart" },
  22: { meaning: "Master Number — Master builder, visionary, highly disciplined.", luckyColors: "Gold, Blue", traits: "Practical dreamer, organizer, ambitious", famousPeople: "Dalai Lama, Will Smith" },
  33: { meaning: "Master Number — Master teacher, selfless service, spiritual nurturer.", luckyColors: "Pink, Blue", traits: "Healer, compassionate, guide", famousPeople: "Meryl Streep, John Lennon" }
};

const calculateLifePath = (day, month, year) => {
  const digits = [...`${day}${month}${year}`].map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);

  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b);
  }
  return sum;
};

const compatibilityMatrix = (num1, num2) => {
  if (num1 === num2) return { score: 95, note: "Highly compatible! You share similar life goals and understand each other deeply." };
  if (Math.abs(num1 - num2) === 1) return { score: 80, note: "Strong connection with complementary qualities." };
  if ((num1 === 2 && num2 === 6) || (num1 === 6 && num2 === 2)) return { score: 90, note: "Excellent match — nurturing and harmonious bond." };
  if ((num1 === 4 && num2 === 8) || (num1 === 8 && num2 === 4)) return { score: 85, note: "Strong business and life partners." };
  return { score: 65, note: "Some differences may require compromise and understanding." };
};

const NumerologyScreen = () => {
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [day, setDay] = useState(null);

  const [year2, setYear2] = useState(null);
  const [month2, setMonth2] = useState(null);
  const [day2, setDay2] = useState(null);

  const [result, setResult] = useState(null);
  const [compatibility, setCompatibility] = useState(null);

  const calculateNumerology = () => {
    if (!year || !month || !day) {
      Alert.alert("Incomplete", "Please select your full birth date.");
      return;
    }

    const num1 = calculateLifePath(day, month, year);
    const details1 = numberDetails[num1];

    let compResult = null;
    if (year2 && month2 && day2) {
      const num2 = calculateLifePath(day2, month2, year2);
      const details2 = numberDetails[num2];
      const comp = compatibilityMatrix(num1, num2);
      compResult = { ...comp, num2, details2 };
    }

    setResult({ number: num1, ...details1 });
    setCompatibility(compResult);
  };

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.heading}>Numerology & Compatibility Calculator</Text>

        <Text style={styles.sectionTitle}>Your Birth Date</Text>
        <Picker selectedValue={year} onValueChange={setYear} style={styles.picker}>
          <Picker.Item label="Select Year" value={null} />
          {years.map((y) => <Picker.Item key={y} label={y.toString()} value={y} />)}
        </Picker>
        <Picker selectedValue={month} onValueChange={setMonth} style={styles.picker}>
          <Picker.Item label="Select Month" value={null} />
          {months.map((m) => <Picker.Item key={m.value} label={m.label} value={m.value} />)}
        </Picker>
        <Picker selectedValue={day} onValueChange={setDay} style={styles.picker}>
          <Picker.Item label="Select Day" value={null} />
          {days.map((d) => <Picker.Item key={d} label={d.toString()} value={d} />)}
        </Picker>

        <Text style={styles.sectionTitle}>Partner/Friend Birth Date (Optional)</Text>
        <Picker selectedValue={year2} onValueChange={setYear2} style={styles.picker}>
          <Picker.Item label="Select Year" value={null} />
          {years.map((y) => <Picker.Item key={y} label={y.toString()} value={y} />)}
        </Picker>
        <Picker selectedValue={month2} onValueChange={setMonth2} style={styles.picker}>
          <Picker.Item label="Select Month" value={null} />
          {months.map((m) => <Picker.Item key={m.value} label={m.label} value={m.value} />)}
        </Picker>
        <Picker selectedValue={day2} onValueChange={setDay2} style={styles.picker}>
          <Picker.Item label="Select Day" value={null} />
          {days.map((d) => <Picker.Item key={d} label={d.toString()} value={d} />)}
        </Picker>

        <TouchableOpacity style={styles.button} onPress={calculateNumerology}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>

        {result && (
          <View style={styles.resultBox}>
            <Text style={styles.resultTitle}>Your Life Path Number: {result.number}</Text>
            <Text style={styles.resultMeaning}>{result.meaning}</Text>
            <Text style={styles.resultSubtitle}>🎨 Lucky Colors: {result.luckyColors}</Text>
            <Text style={styles.resultSubtitle}>🌟 Personality Traits: {result.traits}</Text>
            <Text style={styles.resultSubtitle}>👑 Famous People: {result.famousPeople}</Text>
          </View>
        )}

        {compatibility && (
          <View style={styles.resultBox}>
            <Text style={styles.resultTitle}>Partner's Life Path Number: {compatibility.num2}</Text>
            <Text style={styles.resultMeaning}>{compatibility.details2.meaning}</Text>
            <Text style={styles.resultSubtitle}>Compatibility Score: {compatibility.score}%</Text>
            <Text style={styles.resultText}>{compatibility.note}</Text>
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default NumerologyScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    color: '#B88A3B',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
    textAlign: 'center',
  },
  sectionTitle: { color: '#ffa500', fontSize: 18, marginTop: 20, marginBottom: 5, alignSelf: 'flex-start' },
  picker: { backgroundColor: 'rgba(57, 54, 54, 0.3)', color: '#fff', borderRadius: 8, marginBottom: 10, width: '100%' },
  button: { marginTop: 20, backgroundColor: '#5c51baff', paddingVertical: 14, borderRadius: 30, alignItems: 'center', width: '100%' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
  resultBox: { marginTop: 20, padding: 20, backgroundColor: 'rgba(30,30,30,0.8)', borderRadius: 10, width: '100%' },
  resultTitle: { fontSize: 20, fontWeight: 'bold', color: '#ffa500', marginBottom: 8 },
  resultMeaning: { fontSize: 15, color: '#fff', marginBottom: 8 },
  resultSubtitle: { fontSize: 14, color: '#ffa500', marginBottom: 4 },
  resultText: { fontSize: 14, color: '#fff' },
});
