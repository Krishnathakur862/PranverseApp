import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ReadyToHeal from './src/screens/ReadyToHeal';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import Terms from './src/screens/Terms';
import ZodiacCompatibilityScreen from './src/screens/ZodiacCompatibiltyScreen';
import Horoscope from './src/screens/Horoscope';
import CalendarScreen from './src/screens/CalenderScreen';
import Products from './src/screens/ProductsScreen1';
import ProductWebViewScreen from './src/screens/ProductWebViewScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ReadyToHeal" component={ReadyToHeal} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Terms" component={Terms} options={{ headerShown: false }} />
        <Stack.Screen name="ZodiacCompatibilityScreen" component={ZodiacCompatibilityScreen} options={{ headerShown: false }} />
         <Stack.Screen name="Horoscope" component={Horoscope} options={{ headerShown: false }} />
                 <Stack.Screen name="Products" component={Products} options={{ headerShown: false }} />
                         <Stack.Screen name="ProductWebViewScreen" component={ProductWebViewScreen} options={{ headerShown: false }} />


      
      </Stack.Navigator>

    </NavigationContainer>
  );
}
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import 'react-native-gesture-handler';

// //import { CartProvider } from './src/context/CartContext'; // ✅ Your context

// import WelcomeScreen from './src/screens/WelcomeScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import SignupScreen from './src/screens/SignupScreen';
// import ReadyToHeal from './src/screens/ReadyToHeal';
// import BottomTabs from './src/Navigation/BottomTabNavigator';
// import AstrologyToolkitScreen from './src/screens/AstrologyToolkitScreen';
// import DailyPanchangScreen from './src/screens/DailyPanchangScreen';
// import ZodiacTraitsScreen from './src/screens/ZodiacTraitsScreen';
// import ZodiacDetailScreen from './src/screens/ZodiacDetailScreen';
// import ServicesScreen1 from './src/screens/ServicesScreen1';
// import ProductsScreen1 from './src/screens/ProductsScreen1';
// import BottomTabNavigator from './src/Navigation/BottomTabNavigator';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
   
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Welcome">
//           <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
//           <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//           <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
//           <Stack.Screen name="ReadyToHeal" component={ReadyToHeal} options={{ headerShown: false }} />
//           <Stack.Screen name="Dashboard" component={BottomTabNavigator} options={{ headerShown: false }} />
//           <Stack.Screen name="AstrologyToolkit" component={AstrologyToolkitScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="DailyPanchang" component={DailyPanchangScreen} options={{ headerShown: false }} />
//          <Stack.Screen name="ZodiacTraits" component={ZodiacTraitsScreen} options={{ headerShown: false }} />
//            <Stack.Screen name="ZodiacDetail" component={ZodiacDetailScreen} options={{ headerShown: false }} />
//           <Stack.Screen name="Services" component={ServicesScreen1} options={{ headerShown: false }} />
//           <Stack.Screen name="Products" component={ProductsScreen1} options={{ headerShown: false }} />
//         </Stack.Navigator>
//       </NavigationContainer>
   
//   );
// }

// import 'react-native-gesture-handler';
// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import auth from '@react-native-firebase/auth';
// import { View, ActivityIndicator } from 'react-native';

// import WelcomeScreen from './src/screens/WelcomeScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import SignupScreen from './src/screens/SignupScreen';
// import ReadyToHeal from './src/screens/ReadyToHeal';
// import BottomTabNavigator from './src/navigation/BottomTabNavigator';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState(null);

//   // Firebase Auth Listener
//   useEffect(() => {
//     const unsubscribe = auth().onAuthStateChanged((user) => {
//       setUser(user);
//       if (initializing) setInitializing(false);
//     });

//     return unsubscribe;
//   }, []);

//   if (initializing) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName={user ? 'Dashboard' : 'Welcome'}>
//         {!user ? (
//           <>
//             <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
//           </>
//         ) : null}
        
//         <Stack.Screen name="ReadyToHeal" component={ReadyToHeal} options={{ headerShown: false }} />
//         <Stack.Screen name="Dashboard" component={BottomTabNavigator} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

