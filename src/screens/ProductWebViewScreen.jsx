import React from 'react';
import { View, StyleSheet, ImageBackground, Platform, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

const ProductWebViewScreen = ({ route }) => {
  const { link } = route.params;

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={styles.bg}
      blurRadius={Platform.OS === 'ios' ? 2 : 1}
    >
      <StatusBar barStyle="light-content" />
      <WebView source={{ uri: link }} style={styles.webview} />
    </ImageBackground>
  );
};

export default ProductWebViewScreen;

const styles = StyleSheet.create({
  bg: { flex: 1 },
  webview: { flex: 1, backgroundColor: 'transparent' },
});