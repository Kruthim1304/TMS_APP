import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/loginComp';
import LandingPage from './components/LandingPage';
import TruckDetails from './components/TruckDetails';
import WelcomePage from './components/Welcome';
import Menu from './components/Menu';
import MapScreen from './components/MapScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomePage'>
        <Stack.Screen 
          name="WelcomePage" 
          component={WelcomePage} 
          options={{ headerShown: false }} />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} />
          <Stack.Screen 
          name="Menu" 
          component={Menu} 
          options={{ headerShown:'Transportation Management System' }} />
        <Stack.Screen 
          name="MapScreen" 
          component={MapScreen} 
          options={{ headerShown: 'Transportation Management System' }} />
        <Stack.Screen 
          name="LandingPage" 
          component={LandingPage}
          options={{ headerTitle: 'Transportation Management System' }} />
        <Stack.Screen 
          name="TruckDetails" 
          component={TruckDetails} 
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
