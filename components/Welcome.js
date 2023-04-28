import React, { useEffect } from 'react';
import { Image, View } from 'react-native';

const WelcomePage = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../assets/welcome.png')}
        style={{ width: 500, height: 500 }}
      />
    </View>
  );
};

export default WelcomePage;
