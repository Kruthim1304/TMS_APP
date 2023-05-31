import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const TruckDetails = ({ selectedCity }) => {
  const [truckDetails, setTruckDetails] = useState([]);
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const mapViewRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchTruckData = async () => {
      try {
        const response = await axios.get(
          'http://zingtrack.com/GPSRestWebService/rest/GetTripData/json?API_KEY=CST22ZTTRIPRNIPLAPI&PLANT=RNAIPL'
        );
        const data = response.data;
        const trucks = [];

        data.tripList.forEach(truck => {
          const truckData = {
            truckNumber: truck.truckNo,
            latitude: truck.currentLat,
            longitude: truck.currentLog,
            currentLocation: truck.currentLoc,
            nextLocation: truck.nextLoc,
            distanceTravelled: truck.disCovered,
            totalDistance: truck.totalDis,
          };

          trucks.push(truckData);
        });

        setTruckDetails(trucks);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchTruckData();
  }, []);

  useEffect(() => {
    if (selectedCity && selectedCity.name === 'Others') {
      setSelectedTruck(null);
      setSearchQuery('');
    }
  }, [selectedCity]);

  const handleMarkerPress = truckNumber => {
    const selectedTruck = truckDetails.find(truck => truck.truckNumber === truckNumber);
    setSelectedTruck(selectedTruck);
  };

  const handleSearchQueryChange = text => {
    setSearchQuery(text);
    const selectedTruck = truckDetails.find(truck => truck.truckNumber === text);
    setSelectedTruck(selectedTruck);

    if (selectedTruck) {
      const { latitude, longitude } = selectedTruck;
      mapViewRef.current.animateToRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.backdrop}>
        <Image style={styles.backdropImg} source={require("../assets/image001.png")} />
      </View>
      <View>
        <Text style={styles.heading}>Truck Tracking:</Text>
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search truck number"
          placeholderTextColor="#ffffff"
          value={searchQuery}
          onChangeText={handleSearchQueryChange}
        />
      </View>
      <MapView
        ref={mapViewRef}
        style={{ flex: 0, height: 455, margin: 15, marginTop: 10, borderRadius: 10 }}
        initialRegion={{
          latitude: 22.3511148,
          longitude: 78.6677428,
          latitudeDelta: 30,
          longitudeDelta: 30,
        }}
      >
        {truckDetails.map(truck => (
          <Marker
            key={truck.truckNumber}
            coordinate={{ latitude: truck.latitude, longitude: truck.longitude }}
            title={`Truck No: ${truck.truckNumber}`}
            onPress={() => handleMarkerPress(truck.truckNumber)}
          />
        ))}
      </MapView>

      <View>
        <Text style={styles.status}>Status:</Text>
      </View>

      {selectedTruck && (
        <View style={styles.textdata}>
          <Text style={styles.textdatatext}>Truck Number: {selectedTruck.truckNumber}</Text>
          <Text style={styles.textdatatext}>Current Location: {selectedTruck.currentLocation}</Text>
          <Text style={styles.textdatatext}>Next Location: {selectedTruck.nextLocation}</Text>
          <Text style={styles.textdatatext}>Distance Travelled: {selectedTruck.distanceTravelled}</Text>
          <Text style={styles.textdatatext}>Total Distance: {selectedTruck.totalDistance}</Text>
        </View>
      )}
    </View>
  );
};



const styles = StyleSheet.create({ 

  textdatatext:{
    color: "black",
    width:"95%",
    padding: 3,
    fontWeight: 'bold',
    fontSize: 13,
  },
textdata: {
    color: '#FC6D26',
    backgroundColor:"white",
    borderRadius: 10,
    width:"95%",
    padding: 8,
    margin: 10,
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FC6D26',
    marginTop: 70,
    marginLeft: 10,
    marginBottom:10,
  },

status:{
  borderRadius: 10,
  fontWeight: 'bold',
  color: "#FC6D26",
  width:"25%",
  fontSize:20,
  padding: 10,
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
searchBarContainer: {
  padding: 10,
},
searchBar: {
  borderWidth: 1,
  borderColor: '#ffffff',
  borderRadius: 5,
  paddingVertical: 8,
  paddingHorizontal: 12,
  width: '100%',
  color: '#ffffff',
},
});

export default TruckDetails;
