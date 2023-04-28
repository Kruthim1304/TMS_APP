import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const LoadingPage = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LandingPage');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/loader.gif')} style={styles.loadingImage} />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  loadingImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default LoadingPage;
