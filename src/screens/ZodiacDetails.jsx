import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  ImageBackground,
} from 'react-native';

const zodiacInfo = {
  Aries: {
    emoji: '♈',
    date: 'March 21 - April 19',
    about:
      'Aries is a fire sign ruled by Mars. They are energetic, bold, and fiercely independent. They thrive on new challenges, enjoy competition, and often take the lead in any situation.',
    do: [
      'Take initiative and pursue bold goals',
      'Engage in physical activities or sports',
      'Practice patience and mindful listening',
      'Channel energy into leadership or innovation',
    ],
    avoid: [
      'Acting impulsively without planning',
      'Being overly aggressive or competitive',
      'Ignoring others’ perspectives or needs',
      'Starting many things but not finishing them',
    ],
  },
  Taurus: {
    emoji: '♉',
    date: 'April 20 - May 20',
    about:
      'Taurus is an earth sign ruled by Venus. They are dependable, practical, and value stability. Known for their love of comfort, beauty, and nature, Taureans are patient but can be stubborn.',
    do: [
      'Create a comfortable and stable environment',
      'Work steadily toward long-term goals',
      'Appreciate beauty in art and nature',
      'Practice gratitude daily',
    ],
    avoid: [
      'Becoming overly stubborn or resistant to change',
      'Overindulging in comfort or luxury',
      'Neglecting exercise and activity',
      'Holding grudges for too long',
    ],
  },
  Gemini: {
    emoji: '♊',
    date: 'May 21 - June 20',
    about:
      'Gemini is an air sign ruled by Mercury. They are adaptable, curious, and quick-witted. Known for their dual nature, Geminis are skilled communicators who thrive on variety and learning.',
    do: [
      'Explore new ideas and experiences',
      'Engage in meaningful conversations',
      'Pursue hobbies that stimulate the mind',
      'Stay connected with friends and networks',
    ],
    avoid: [
      'Becoming scattered or unfocused',
      'Gossiping or speaking without thinking',
      'Avoiding commitments',
      'Overloading your schedule',
    ],
  },
  Cancer: {
    emoji: '♋',
    date: 'June 21 - July 22',
    about:
      'Cancer is a water sign ruled by the Moon. They are nurturing, sensitive, and deeply intuitive. They value home, family, and emotional security.',
    do: [
      'Spend quality time with loved ones',
      'Express emotions openly',
      'Create a warm and safe home space',
      'Follow your intuition in decisions',
    ],
    avoid: [
      'Becoming overly moody or withdrawn',
      'Holding onto past hurts',
      'Being overly protective',
      'Avoiding necessary confrontations',
    ],
  },
  Leo: {
    emoji: '♌',
    date: 'July 23 - August 22',
    about:
      'Leo is a fire sign ruled by the Sun. They are confident, charismatic, and love to be in the spotlight. Leos are natural leaders with a generous heart.',
    do: [
      'Pursue creative projects',
      'Take leadership opportunities',
      'Show appreciation to others',
      'Embrace self-expression',
    ],
    avoid: [
      'Becoming arrogant or self-centered',
      'Overdramatizing situations',
      'Ignoring advice from others',
      'Overspending to impress',
    ],
  },
  Virgo: {
    emoji: '♍',
    date: 'August 23 - September 22',
    about:
      'Virgo is an earth sign ruled by Mercury. They are analytical, detail-oriented, and dedicated to helping others. Virgos strive for perfection and value order.',
    do: [
      'Organize your environment',
      'Help others in meaningful ways',
      'Focus on self-improvement',
      'Balance work with relaxation',
    ],
    avoid: [
      'Being overly critical of yourself or others',
      'Overthinking small details',
      'Neglecting rest',
      'Taking on too much responsibility',
    ],
  },
  Libra: {
    emoji: '♎',
    date: 'September 23 - October 22',
    about:
      'Libra is an air sign ruled by Venus. They value harmony, beauty, and relationships. Libras are diplomatic and have a strong sense of fairness.',
    do: [
      'Seek balance in work and life',
      'Build strong, healthy relationships',
      'Surround yourself with beauty',
      'Practice fairness in decisions',
    ],
    avoid: [
      'Avoiding conflicts at all costs',
      'Becoming indecisive',
      'Over-prioritizing others over yourself',
      'Neglecting personal boundaries',
    ],
  },
  Scorpio: {
    emoji: '♏',
    date: 'October 23 - November 21',
    about:
      'Scorpio is a water sign ruled by Pluto and Mars. They are passionate, determined, and deeply emotional. Scorpios are known for their intensity and loyalty.',
    do: [
      'Pursue meaningful goals with focus',
      'Express emotions honestly',
      'Build trust in relationships',
      'Channel passion into creativity',
    ],
    avoid: [
      'Being overly secretive or suspicious',
      'Holding grudges',
      'Becoming controlling',
      'Obsessing over details',
    ],
  },
  Sagittarius: {
    emoji: '♐',
    date: 'November 22 - December 21',
    about:
      'Sagittarius is a fire sign ruled by Jupiter. They are adventurous, optimistic, and love freedom. They seek knowledge and new experiences.',
    do: [
      'Travel and explore new cultures',
      'Stay open-minded',
      'Pursue education and learning',
      'Embrace change and spontaneity',
    ],
    avoid: [
      'Overcommitting to too many things',
      'Avoiding responsibilities',
      'Being overly blunt',
      'Neglecting emotional connections',
    ],
  },
  Capricorn: {
    emoji: '♑',
    date: 'December 22 - January 19',
    about:
      'Capricorn is an earth sign ruled by Saturn. They are disciplined, responsible, and ambitious. Capricorns value tradition and hard work.',
    do: [
      'Set clear long-term goals',
      'Work steadily toward success',
      'Take responsibility for actions',
      'Maintain discipline in habits',
    ],
    avoid: [
      'Being overly rigid or stubborn',
      'Neglecting personal life for work',
      'Becoming pessimistic',
      'Avoiding risks entirely',
    ],
  },
  Aquarius: {
    emoji: '♒',
    date: 'January 20 - February 18',
    about:
      'Aquarius is an air sign ruled by Uranus and Saturn. They are innovative, independent, and humanitarian. Aquarians think outside the box.',
    do: [
      'Pursue unique ideas and innovations',
      'Support humanitarian causes',
      'Stay open to unconventional thinking',
      'Connect with diverse people',
    ],
    avoid: [
      'Becoming emotionally detached',
      'Rebelling without purpose',
      'Ignoring practical matters',
      'Overlooking details',
    ],
  },
  Pisces: {
    emoji: '♓',
    date: 'February 19 - March 20',
    about:
      'Pisces is a water sign ruled by Neptune. They are compassionate, artistic, and intuitive. Pisces have vivid imaginations and deep empathy.',
    do: [
      'Explore creative hobbies',
      'Spend time near water',
      'Help others in need',
      'Trust your intuition',
    ],
    avoid: [
      'Escaping reality through unhealthy habits',
      'Being overly idealistic',
      'Letting boundaries be crossed',
      'Overcommitting emotionally',
    ],
  },
};

export default function ZodiacDetails({ route }) {
  const { selectedSign } = route.params;
  const signData = zodiacInfo[selectedSign];

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <Text style={styles.heading}>{signData.emoji} {selectedSign}</Text>

        <ScrollView contentContainerStyle={styles.contentContainer}>
          {/* About */}
          <View style={styles.card}>
            <Text style={styles.title}>About {selectedSign}</Text>
            <Text style={styles.text}>{signData.about}</Text>
          </View>

          {/* Things to Do */}
          <View style={styles.card}>
            <Text style={styles.title}>Things {selectedSign} Should Do ✅</Text>
            <Text style={styles.text}>{signData.do.join('\n')}</Text>
          </View>

          {/* Things to Avoid */}
          <View style={styles.card}>
            <Text style={styles.title}>Things {selectedSign} Should Avoid 🚫</Text>
            <Text style={styles.text}>{signData.avoid.join('\n')}</Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#d2d1d1ff',
    lineHeight: 22,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
});
