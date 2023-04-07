import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TruckDetails = ({ route }) => {
  const { truckId } = route.params;
  const [truckDetails, setTruckDetails] = useState(null);

  useEffect(() => {
    const fetchTruckDetails = async () => {
      try {
        const response = await fetch(`https://api.example.com/trucks/${truckId}`);
        const data = await response.json();
        setTruckDetails(data);
      } catch (error) {
        console.error('Error fetching truck details:', error);
      }
    };

    fetchTruckDetails();
  }, [truckId]);

  return (
    <View style={styles.container}>
      {truckDetails ? (
        <>
          <Text style={styles.heading}>Truck Details</Text>
          <Text style={styles.label}>Truck Number:</Text>
          <Text style={styles.value}>{truckDetails.truckNumber}</Text>
          <Text style={styles.label}>Truck Order:</Text>
          <Text style={styles.value}>{truckDetails.truckOrder}</Text>
          <Text style={styles.label}>Current Location:</Text>
          <Text style={styles.value}>{truckDetails.currentLocation}</Text>
          <Text style={styles.label}>Current Status:</Text>
          <Text style={styles.value}>{truckDetails.currentStatus}</Text>
        </>
      ) : (
        <Text>Loading truck details...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    color: '#FC6D26',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 16,
  },
});

export default TruckDetails;