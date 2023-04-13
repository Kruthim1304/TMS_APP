import { View, Text, Image } from 'react-native'
import React from 'react'
// import Login from "./Login";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/loginComp';
import LandingPage from './components/LandingPage';
import TruckDetails from './components/TruckDetails';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} />
        <Stack.Screen 
          name="LandingPage" 
          component={LandingPage}
          options={{ headerTitle: 'Transportation Management System - Portal'}} />
        <Stack.Screen 
          name="TruckDetails" 
          component={TruckDetails} 
          options={{ headerShown: false }} />
      
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;