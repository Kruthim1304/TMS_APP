import React, { useState, useEffect, Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import { ScrollView } from 'react-native-web';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



// const trucksData = [
//     { truckNumber: 'Truck 1', truckOrder: 'Order 123', currentLocation: 'Location 1', currentStatus: 'Status 1' },
//     { truckNumber: 'Truck 2', truckOrder: 'Order 456', currentLocation: 'Location 2', currentStatus: 'Status 2' },
//     { truckNumber: 'Truck 3', truckOrder: 'Order 789', currentLocation: 'Location 3', currentStatus: 'Status 3' },
//   ];

const LandingPage = () => {
    const [searchValue, setSearchValue] = React.useState('');
    const [filteredTrucks, setFilteredTrucks] = React.useState(trucksData);
    const navigation = useNavigation();
    const [trucksData, setTrucksData] = useState([]);

    // useEffect(() => {
    //   axios
    //     .get('http://zingtrack.com/GPSRestWebService/rest/GetOnlineData/json?API_KEY=CST22ZTRNIPLMRAPI&VEHICLE_ID=ALL')
    //     .then((response) => {
    //       // Set fetched trucks data to state
    //       setTrucksData(response.data);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching trucks data:', error);
    //     });
    // }, []);



    useEffect(() => {
      const fetchTrucksData = async () => {
        try {
          const response = await fetch('http://zingtrack.com/GPSRestWebService/rest/GetOnlineData/json?API_KEY=CST22ZTRNIPLMRAPI&VEHICLE_ID=ALL'); 
          
          const data = await response.json();
          setTrucksData(data);
        } catch (error) {
          console.error('Failed to fetch truck data', error);
        }
      };

      fetchTrucksData();
    }, []);
  
    const handleSearch = (text) => {
      setSearchValue(text);
  
      const filteredData = trucksData.filter(truck => {
        return truck.truckNumber.toLowerCase().includes(text.toLowerCase());
      });
  
      setFilteredTrucks(filteredData);
    }
  
    // const renderTruckItem = ({ item }) => {
    //   return (
    //     <View style={styles.truckItemContainer}>
    //       <Text style={styles.truckItemText}>{item.truckNumber}</Text>
    //       <Text style={styles.truckItemText}>{item.truckOrder}</Text>
    //       <Text style={styles.truckItemText}>{item.currentLocation}</Text>
    //       <Text style={styles.truckItemText}>{item.currentStatus}</Text>
    //     </View>
    //   );
    // }


    // const renderTruckRow = ({ item }) => (
    //     <TouchableOpacity style={styles.truckRow} onPress={() => handleTruckPress(item.id)}>
    //       <Text style={styles.truckNumber}>{item.truckNumber}</Text>
    //       <Text style={styles.truckOrder}>{item.truckOrder}</Text>
    //       <Text style={styles.currentLocation}>{item.currentLocation}</Text>
    //       <Text style={styles.currentStatus}>{item.currentStatus}</Text>
    //     </TouchableOpacity>
    //   );

    const renderTruckRow = ({ item }) => (
      <TouchableOpacity style={styles.truckRow} onPress={() => handleTruckPress(item.id)}>
        <Text style={styles.truckNumber} numberOfLines={1} >{item.vehicleId}</Text>
        <View style = {styles.truckDetailsContainer}>
        <Text style={styles.truckAddress} numberOfLines={1}>{item.address}</Text>
        <Text style={styles.currentLocation} numberOfLines={1} >{item.latitude}, {item.longitude}</Text>
        <Text style={styles.dateTime} numberOfLines={1} >{item.dateTime}</Text>
        <Text style={styles.dailyMileage} numberOfLines={1} >{item.dailyMileage}</Text>
        </View>
      </TouchableOpacity>
    );
    const handleTruckPress = (truckId) => {
        navigation.navigate('TruckDetails', { truckId });
      };
  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Truck Dashboard</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search by License Plate"
          value={searchValue}
          onChangeText={handleSearch}
        />
        <View style={styles.tableHeaderContainer}>
          <Text style={styles.tableHeaderText}>Truck No.</Text>
          <Text style={styles.tableHeaderText}>Current Location</Text>
          <Text style={styles.tableHeaderText}>Current Lat, Long</Text>
          <Text style={styles.tableHeaderText}>Current Status</Text>

        </View>
        {/* <ScrollView horizontal contentContainerStyle={styles.tableContainer}> */}
        <FlatList
        data={trucksData.onlineDataList}
        renderItem={renderTruckRow}
        keyExtractor={(item, index) => index.toString()}
        style={styles.table}
        
      />
      {/* </ScrollView> */}
      
        {/* <View style={styles.tableLine} />
        <TouchableOpacity
        onPress={() => handleTruckClick(1)}
        style={styles.truckRow}
      >
        <Text style={styles.truckNumber}>Truck #1</Text>
        <Text style={styles.truckOrder}>Truck Order</Text>
        <Text style={styles.currentLocation}>Current Location</Text>
        <Text style={styles.currentStatus}>Current Status</Text>
      </TouchableOpacity> */}
      {/* <FlatList
        data={trucksData.onlineDataList}
        renderItem={renderTruckRow}
        keyExtractor={(item, index) => index.toString()}
        style={styles.truckList}
      /> */}
        {/* {trucksData.onlineDataList.map(truck => (
        <TouchableOpacity
        key={truck.truckNumber}
        onPress={() => handleTruckClick(truck.truckNumber)}
        style={styles.truckRow}
      >
        <Text style={styles.truckNumber}>{truck.truckNumber}</Text>
          <Text style={styles.truckOrder}>{truck.truckOrder}</Text>
          <Text style={styles.currentLocation}>{truck.currentLocation}</Text>
          <Text style={styles.currentStatus}>{truck.currentStatus}</Text>
      </TouchableOpacity>
        ))} */}
      </View>
    //   <View style={styles.container}>
    //   <Text style={styles.heading}>Truck Dashboard</Text>
    //   <FlatList
    //     data={trucksData.onlineDataList}
    //     renderItem={renderTruckRow}
    //     keyExtractor={(item, index) => index.toString()}
    //     style={styles.table}
    //   />
    // </View>

    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
      },
      heading: {
          fontSize: 30,
          fontWeight: 'bold',
          color: '#FC6D26',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 16,
        },
      searchBar: {
        height: 40,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
      },
      tableHeaderContainer: {
        flexDirection: 'row',
        marginBottom: 8,
      },
      tableHeaderText: {
        flex: 1,
        fontWeight: 'bold',
        color: "#FC6D26",
        fontSize: 16,
      },
      truckDetailsContainer: {
        flex: 4,
        marginLeft: 16,
      },
      truckItemContainer: {
        flexDirection: 'column',
        marginBottom: 8,
      },
      truckItemText: {
        flex: 1,
        fontSize: 16,
      },
      tableLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#FC6D26',
        marginBottom: 8,
      },
      truckRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#FC6D26',
        marginBottom: 8,
      },
      truckNumber: {
        flex: 1,
        width: 0,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000',
        overflow: 'hidden',
      },
      truckOrder: {
        flex: 2,
        marginBottom: 4,
        fontSize: 14,
        color: '#000000',
        overflow: 'hidden',
      },
      truckAddress: {
        flex: 1,
        // width: 80,
        fontSize: 14,
        color: '#000000',
        overflow: 'hidden',
      },
      dateTime: {
        flex: 1,
        fontSize: 14,
        // width : 80,
        color: '#000000',
        overflow: 'hidden',
      },
      dailyMileage: {
        flex: 1,
        fontSize: 14,
        color: '#000000',
        overflow: 'hidden',
      },
      currentStatus: {
        flex: 1,
        fontSize: 14,
        color: '#000000',
        overflow: 'hidden',
        // width: 80,
      },
      table: {
        flex: 1,
        marginTop: 16,
      },
      tableContainer: {
        width: '100%',
      },
  });

export default LandingPage;