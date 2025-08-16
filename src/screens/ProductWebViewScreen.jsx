import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Platform,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import { WebView } from 'react-native-webview';

const ProductWebViewScreen = ({ route }) => {
  const { link } = route.params;
  const [loading, setLoading] = useState(true);
  const hasLoadedOnce = useRef(false);

  const handleLoadEnd = () => {
    if (!hasLoadedOnce.current) {
      hasLoadedOnce.current = true;
      setTimeout(() => {
        setLoading(false);
      }, 1000); 
    }
  };

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={styles.bg}
      blurRadius={Platform.OS === 'ios' ? 2 : 1}
    >
      <StatusBar barStyle="light-content" />

      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#f6c90e" />
        </View>
      )}

      <WebView
        source={{ uri: link }}
        style={styles.webview}
        onLoadEnd={handleLoadEnd}
      />
    </ImageBackground>
  );
};

export default ProductWebViewScreen;

const styles = StyleSheet.create({
  bg: { flex: 1 },
  webview: { flex: 1, backgroundColor: 'transparent' },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
});
