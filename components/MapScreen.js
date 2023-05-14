import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text,Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const mapRef = useRef(null);
  const navigation = useNavigation();
  const [selectedCity, setSelectedCity] = useState(null);
  const [showButtons, setShowButtons] = useState(false);

  const handleCityPress = (city) => {
    setSelectedCity(city);
    setShowButtons(true);

    // Update the map's region to the selected city
    const region = {
      latitude: city.latitude,
      longitude: city.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };
    mapRef.current.animateToRegion(region, 500);
  };

  const handleOptionPress = (option) => {
    if (option === 'LH' && selectedCity.name === 'Delhi') {
      // Navigate to another page when LH is pressed after selecting Delhi
      navigation.navigate('LandingPage');
    } else {
      // Handle other option button presses
      console.log(option + ' button pressed');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backdrop}>
        <Image
            style={styles.backdropImg}
            source={require("../assets/image001.png")}
          />
        </View>
        <View>
        <Text style={styles.heading}> Select Region :   </Text>
        </View>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 22.3511148,
          longitude: 78.6677428,
          latitudeDelta: 30,
          longitudeDelta: 30,
        }}
      >
        <Marker
          coordinate={{ latitude: 13.0827, longitude: 80.2707 }}
          onPress={() =>
            handleCityPress({ name: 'Chennai', latitude: 13.0827, longitude: 80.2707 })
          }
        >
          <View style={styles.marker}>
            <Text style={styles.markerText}>Chennai</Text>
          </View>
        </Marker>

        <Marker
          coordinate={{ latitude: 18.5204, longitude: 73.8567 }}
          onPress={() =>
            handleCityPress({ name: 'Pune', latitude: 18.5204, longitude: 73.8567 })
          }
        >
          <View style={styles.marker}>
            <Text style={styles.markerText}>Pune</Text>
          </View>
        </Marker>

        <Marker
          coordinate={{ latitude: 12.9716, longitude: 77.5946 }}
          onPress={() =>
            handleCityPress({ name: 'Bangalore', latitude: 12.9716, longitude: 77.5946 })
          }
        >
          <View style={styles.marker}>
            <Text style={styles.markerText}>Bangalore</Text>
          </View>
        </Marker>

        <Marker
          coordinate={{ latitude: 28.7041, longitude: 77.1025 }}
          onPress={() =>
            handleCityPress({ name: 'Delhi', latitude: 28.7041, longitude: 77.1025 })
          }
        >
          <View style={styles.marker}>
            <Text style={styles.markerText}>Delhi</Text>
          </View>
        </Marker>
      </MapView>

      {selectedCity && showButtons && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOptionPress('MR')}
          >
            <Text style={styles.buttonText}>MR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOptionPress('LH')}
          >
            <Text style={styles.buttonText}>LH</Text>
          </TouchableOpacity>
          </View>
          )}
            <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        handleCityPress({ name: 'Pune', latitude: 18.5204, longitude: 73.8567 })
      }
    >
      <Text style={styles.buttonText}>Pune</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        handleCityPress({ name: 'Bangalore', latitude: 12.9716, longitude: 77.5946 })
      }
    >
      <Text style={styles.buttonText}>Bangalore</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        handleCityPress({ name: 'Chennai', latitude: 13.0827, longitude: 80.2707 })
      }
    >
      <Text style={styles.buttonText}>Chennai</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        handleCityPress({ name: 'Delhi', latitude: 28.7041, longitude: 77.1025 })
      }
    >
      <Text style={styles.buttonText}>Delhi</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
  container: {
  flex: 1,

  },
  
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FC6D26',
    marginTop: 70,
    marginLeft: 10,

  },
  map: {
    flex: 0 ,
    height:550,
    margin:15,
    borderRadius:8 // Adjust the height as needed
  },
  buttonContainer: {
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgba(255, 87, 51, 0.85)',
    padding: 12,
    marginTop:15,
    borderRadius: 3,
    margin:8,
  },
  buttonText: {
  color: 'white',
  fontWeight: 'bold',
  },
  marker: {
    backgroundColor: 'rgba(255, 87, 51, 0.8)',
    padding: 5,
    borderRadius: 5,
  },
  markerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backdrop: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backdropImg: {
  flex: 1,
  resizeMode: 'cover',
  },
  });
  
  export default MapScreen;
