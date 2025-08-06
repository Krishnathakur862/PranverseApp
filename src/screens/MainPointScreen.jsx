// import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   ImageBackground,
//   Platform,
// } from 'react-native';
// import { useNavigation, DrawerActions } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const SCREEN_WIDTH = Dimensions.get('window').width;

// const MainPointScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <ImageBackground
//       source={require('../assets/welcome-bg.jpg')}
//       style={styles.background}
//       resizeMode="cover"
//       blurRadius={Platform.OS === 'ios' ? 2 : 1}
//     >
      

//       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

//         <View style={styles.row}>
//           <FeatureCard title="Services" icon="hands-pray" onPress={() => navigation.navigate('Services')} />
//           <FeatureCard title="Products" icon="shopping" onPress={() => navigation.navigate('Products')} />
//           <FeatureCard title="Courses" icon="book-open-page-variant" onPress={() => navigation.navigate('Courses')} />
//         </View>

//         <BannerCard
//           title="Free Tarot Reading"
//           icon="cards-playing-outline"
//           description="Get answers & insights you need"
//           buttonText="Start Reading"
//           onPress={() => alert('Tarot clicked')}
//         />
//           </ScrollView>
//     </ImageBackground>
//   );
// };

// const FeatureCard = ({ title, icon, onPress }) => (
//   <TouchableOpacity style={styles.featureCard} onPress={onPress}>
//     <Icon name={icon} size={26} color="#B88A3B" />
//     <Text style={styles.featureText}>{title}</Text>
//   </TouchableOpacity>
// );

// const BannerCard = ({ title, icon, description, buttonText, onPress }) => (
//   <View style={styles.bannerCard}>
//     <Text style={styles.bannerTitle}><Icon name={icon} size={20} /> {title}</Text>
//     <Text style={styles.bannerDescription}>{description}</Text>
//     <TouchableOpacity style={styles.bannerButton} onPress={onPress}>
//       <Text style={styles.bannerButtonText}>{buttonText}</Text>
//     </TouchableOpacity>
//   </View>
// );

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: 'rgba(255,255,255,0.85)',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#B88A3B',
//   },
//   scrollContent: {
//     padding: 16,
//   },
//   welcomeText: {
//     fontSize: 22,
//     color: '#fff',
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   featureCard: {
//     backgroundColor: '#fff',
//     width: (SCREEN_WIDTH - 64) / 3,
//     padding: 12,
//     borderRadius: 12,
//     alignItems: 'center',
//     elevation: 3,
//   },
//   featureText: {
//     fontSize: 13,
//     fontWeight: '600',
//     textAlign: 'center',
//     marginTop: 6,
//   },
//   bannerCard: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 20,
//     marginBottom: 20,
//     elevation: 4,
//   },
//   bannerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#B88A3B',
//     marginBottom: 8,
//   },
//   bannerDescription: {
//     fontSize: 14,
//     marginBottom: 12,
//     color: '#555',
//   },
//   bannerButton: {
//     backgroundColor: '#B88A3B',
//     paddingVertical: 10,
//     borderRadius: 30,
//     alignItems: 'center',
//   },
//   bannerButtonText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 16,
//   },
// });

// export default MainPointScreen;
// MainPointScreen.js

// import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   ImageBackground,
//   Platform,
//   StatusBar,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const SCREEN_WIDTH = Dimensions.get('window').width;

// const MainPointScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <ImageBackground
//       source={require('../assets/bg2.jpg')} // Your space-themed background
//       style={styles.background}
//       resizeMode="cover"
//       blurRadius={Platform.OS === 'ios' ? 2 : 1}
//     >
//       <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

//       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
//         {/* Welcome text */}
//         <Text style={styles.welcomeText}>Welcome to Pranverse ✨</Text>

//         {/* Horizontal scroll section for quick-access features */}
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
//           <FeatureCard title="Services" icon="hands-pray" onPress={() => navigation.navigate('Services')} />
//           <FeatureCard title="Products" icon="shopping" onPress={() => navigation.navigate('Products')} />
//           <FeatureCard title="Courses" icon="book-open-page-variant" onPress={() => navigation.navigate('Courses')} />
//           <FeatureCard title="Astrology" icon="star-four-points-outline" onPress={() => navigation.navigate('Astrology')} />
//           <FeatureCard title="Healing" icon="leaf" onPress={() => navigation.navigate('Healing')} />
//           <FeatureCard title="Workshops" icon="account-group-outline" onPress={() => navigation.navigate('Workshops')} />
//         </ScrollView>

//         <BannerCard
//           title="Zodiac Traits 🔮"
//           icon="zodiac-aquarius"
//           description="Explore your zodiac strengths, weaknesses & compatibility."
//           buttonText="Check Yours"
//           onPress={() => navigation.navigate('ZodiacTraits')}
//         />

//         <BannerCard
//           title="Astrology Toolkit 🌌"
//           icon="white-balance-sunny"
//           description="Horoscopes, Birth Charts, Retrogrades, Compatibility & more."
//           buttonText="Explore Astrology"
//           onPress={() => navigation.navigate('AstrologyToolkit')}
//         />

//         <BannerCard
//           title="Free Tarot Reading"
//           icon="cards-playing-outline"
//           description="Get answers & insights you need"
//           buttonText="Start Reading"
//           onPress={() => alert('Tarot clicked')}
//         />

//         <BannerCard
//           title="Healing Hub 🌿"
//           icon="meditation"
//           description="Chakras, Meditations, Affirmations, Frequencies, Crystals & more."
//           buttonText="Start Healing"
//           onPress={() => navigation.navigate('Healing')}
//         />

//         <BannerCard
//           title="Spiritual Growth 📿"
//           icon="yin-yang"
//           description="Tarot spreads, shadow work, moon rituals & journaling tools."
//           buttonText="Begin Growth"
//           onPress={() => navigation.navigate('SpiritualGrowth')}
//         />

//         <BannerCard
//           title="Shop & Services 🛍"
//           icon="cart-outline"
//           description="Book sessions, buy crystals, join workshops & get certified."
//           buttonText="Visit Store"
//           onPress={() => navigation.navigate('Store')}
//         />

//         <BannerCard
//           title="Community & Chat 💬"
//           icon="account-group"
//           description="Share experiences, chat with guides & grow together."
//           buttonText="Join Community"
//           onPress={() => navigation.navigate('Community')}
//         />

//         <BannerCard
//           title="Bonus Features 🎁"
//           icon="lightbulb-on-outline"
//           description="AI recos, blogs, ritual reminders, private journaling & more."
//           buttonText="See Extras"
//           onPress={() => navigation.navigate('Bonus')}
//         />
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// const FeatureCard = ({ title, icon, onPress }) => (
//   <TouchableOpacity
//   style={styles.featureCard}
//   onPress={() => navigation.navigate('ZodiacCompatibilityScreen')}
// >
//   <Icon
//     name={icon}
//     size={28}
//     color="#B88A3B"
//     style={{
//       textShadowColor: '#000',
//       textShadowOffset: { width: 0, height: 1 },
//       textShadowRadius: 6,
//       marginBottom: 8,
//     }}
//   />
//   <Text style={styles.featureText}>{title}</Text>
// </TouchableOpacity>


// const BannerCard = ({ title, icon, description, buttonText, onPress }) => (
//   <View style={styles.bannerCard}>
//     <Text style={styles.bannerTitle}>
//       <Icon name={icon} size={22} /> {title}
//     </Text>
//     <Text style={styles.bannerDescription}>{description}</Text>
//     <TouchableOpacity style={styles.bannerButton} onPress={onPress}>
//       <Text style={styles.bannerButtonText}>{buttonText}</Text>
//     </TouchableOpacity>
//   </View>
// );

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   scrollContent: {
//     padding: 16,
//     paddingTop: 60, 
//   },
//   welcomeText: {
//     fontSize: 22,
//     color: '#F5DEB3',
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     textShadowColor: '#000',
//     textShadowOffset: { width: 0, height: 1 },
//     textShadowRadius: 3,
//   },
//   horizontalScroll: {
//     marginBottom: 20,
//   },
//   featureCard: {
//     backgroundColor: 'rgba(82, 70, 70, 0.3)',
//     width: 100,
//     marginRight: 22,
//     padding: 12,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   featureText: {
//     fontSize: 13,
//     fontWeight: '600',
//     textAlign: 'center',
//     marginTop: 9,
//     color: '#F0F0F0', 
//     textShadowColor: '#000',
//     textShadowOffset: { width: 0, height: 1 },
//     textShadowRadius: 2,
//   },
//   bannerCard: {
//     backgroundColor: 'rgba(82, 70, 70, 0.3)', 
//     padding: 24,
//     borderRadius: 20,
//     marginBottom: 24,
//     minHeight: 160,
//     justifyContent: 'center',
//     borderRadius:11
//   },
//   bannerTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#FFD700', 
//     textShadowColor: '#000',
//     textShadowOffset: { width: 0, height: 1 },
//     textShadowRadius: 3,
//   },
//   bannerDescription: {
//     fontSize: 16,
//     marginBottom: 16,
//     color: '#E0E0E0', 
    
//   },
//   bannerButton: {
//     backgroundColor: '#5c51baff', 
//     paddingVertical: 12,
//     borderRadius: 30,
//     alignItems: 'center',
//   },
//   bannerButtonText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 18,
//   },
// });

// export default MainPointScreen;

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Platform,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ZodiacCompatibilityScreen from './ZodiacCompatibiltyScreen';
import Horoscope from './Horoscope';
import Products from './ProductsScreen1';

const SCREEN_WIDTH = Dimensions.get('window').width;

const MainPointScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={styles.background}
      resizeMode="cover"
      blurRadius={Platform.OS === 'ios' ? 2 : 1}
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.welcomeText}>Welcome to Pranverse ✨</Text>

        {/* Horizontal Scroll */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <FeatureCard title="Products" icon="shopping" screen="Products" />
        </ScrollView>

        {/* Banner Cards */}
        <BannerCard
          title="Zodiac Traits "
          icon="zodiac-aquarius"
          description="Explore your zodiac strengths, weaknesses & compatibility."
          buttonText="Check Yours"
          onPress={() => navigation.navigate('ZodiacTraits')}
        />
        <BannerCard
          title="Horoscopes"
          icon="white-balance-sunny"
          description=" Daily Horoscopes according your Zodiac Signs"
          buttonText="Check yours"
          onPress={() => navigation.navigate(Horoscope)}
        />
        <BannerCard
          title="Astrology Toolkit 🌌"
          icon="white-balance-sunny"
          description="Horoscopes, Birth Charts, Retrogrades, Compatibility & more."
          buttonText="Explore Astrology"
          onPress={() => navigation.navigate('AstrologyToolkit')}
        />

        <BannerCard
          title="Free Tarot Reading"
          icon="cards-playing-outline"
          description="Get answers & insights you need"
          buttonText="Start Reading"
          onPress={() => alert('Tarot clicked')}
        />

        <BannerCard
          title="Healing Hub 🌿"
          icon="meditation"
          description="Chakras, Meditations, Affirmations, Frequencies, Crystals & more."
          buttonText="Start Healing"
          onPress={() => navigation.navigate('Healing')}
        />

        

        <BannerCard
          title="Products"
          icon="account-group"
          description="Share experiences, chat with guides & grow together."
          buttonText="Join Community"
          onPress={() => navigation.navigate('Products')}
        />

        
        <BannerCard
          title=" Zodiac Compatibility"
          icon="lightbulb-on-outline"
          description="Match zodiac Signs and see you compatibilty with your partner"
          buttonText="See Extras"
          onPress={() => navigation.navigate(ZodiacCompatibilityScreen)}
        />
      </ScrollView>
    </ImageBackground>
  );
};

const FeatureCard = ({ title, icon, screen }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.featureCard} onPress={() => navigation.navigate(Products)}>
      <Icon
        name={icon}
        size={28}
        color="#B88A3B"
        style={{
          marginBottom: 8,
        }}
      />
      <Text style={styles.featureText}>{title}</Text>
    </TouchableOpacity>
  );
};

// ✅ Correct BannerCard
const BannerCard = ({ title, icon, description, buttonText, onPress }) => (
  <View style={styles.bannerCard}>
    <Text style={styles.bannerTitle}>
      <Icon name={icon} size={22} color="#B88A3B" /> {title}
    </Text>
    <Text style={styles.bannerDescription}>{description}</Text>
    <TouchableOpacity style={styles.bannerButton} onPress={onPress}>
      <Text style={styles.bannerButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingTop: 60,
  },
  welcomeText: {
    fontSize: 22,
    color: '#F5DEB3',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  featureCard: {
    backgroundColor: 'rgba(82, 70, 70, 0.3)',
    width: 100,
    marginRight: 22,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  featureText: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 9,
    color: '#F0F0F0',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  bannerCard: {
    backgroundColor: 'rgba(82, 70, 70, 0.3)',
    padding: 24,
    borderRadius: 20,
    marginBottom: 24,
    minHeight: 160,
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  bannerDescription: {
    fontSize: 16,
    marginBottom: 16,
    color: '#E0E0E0',
  },
  bannerButton: {
    backgroundColor: '#5c51baff',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  bannerButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default MainPointScreen;
