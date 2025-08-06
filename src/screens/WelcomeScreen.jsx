// // import React from 'react';
// // import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';

// // export default function WelcomeScreen({ navigation }) {
// //   return (
// //     <ImageBackground
// //       source={require('../assets/bg2.jpg')}
// //       style={styles.container}
// //       resizeMode="cover"
// //     >
// //       <StatusBar translucent backgroundColor="transparent" />
// //       <View style={styles.overlay}>
// //         <Text style={styles.title}>Welcome to Pranverse</Text>
// //         <Text style={styles.subtitle}>A spiritual healing journey</Text>

// //         <TouchableOpacity
// //           style={styles.button}
// //           onPress={() => navigation.navigate('Login')}
// //         >
// //           <Text style={styles.buttonText}>Continue</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </ImageBackground>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   overlay: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     paddingHorizontal: 30,
// //     marginTop:120
// //   },
// //   title: {
// //     fontSize: 34,
// //     color: '#ffffffff',
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     textAlign: 'center',
// //   },
// //   subtitle: {
// //     fontSize: 18,
// //     color: '#ffff',
// //     marginBottom: 40,
// //     textAlign: 'center',
// //   },
// //   button: {
// //     backgroundColor: '#5c51baff',
// //     paddingVertical: 14,
// //     paddingHorizontal: 40,
// //     borderRadius: 30,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// // });
// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ImageBackground,
//   StatusBar,
//   ActivityIndicator
// } from 'react-native';

// export default function WelcomeScreen({ navigation }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//       navigation.replace('Login'); 
//     }, 2000); 

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <ImageBackground
//       source={require('../assets/bg2.jpg')}
//       style={styles.container}
//       resizeMode="cover"
//     >
//       <StatusBar translucent backgroundColor="transparent" />
//       <View style={styles.overlay}>
//         <Text style={styles.title}>Welcome to Pranverse</Text>
//         <Text style={styles.subtitle}>A spiritual healing journey</Text>
//         {loading && (
//           <ActivityIndicator
//             size="large"
//             color="#5c51baff"
//             style={styles.loader}
//           />
//         )}
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   overlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 30,
//     marginTop: 120,
//   },
//   title: {
//     fontSize: 34,
//     color: '#fff',
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 18,
//     color: '#fff',
//     marginBottom: 40,
//     textAlign: 'center',
//   },
//   loader: {
//     marginTop: 30,
//   },
// });
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

export default function WelcomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigation.replace('Login'); 
    }, 2000); // Show screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')} 
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Pranverse</Text>
        <Text style={styles.subtitle}>A spiritual healing journey</Text>

        

        
        {loading && (
          <ActivityIndicator
            size="large"
            color="#5c51baff"
            style={styles.loader}
          />
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 120,
  },
  title: {
    fontSize: 34,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  middleImage: {
    width: 120,        
    height: 120,
    resizeMode: 'contain',
    marginBottom: 30,  
  },
  loader: {
    marginTop: 20,
  },
});
