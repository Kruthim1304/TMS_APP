import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const trucksData = [
    { truckNumber: 'Truck 1', truckOrder: 'Order 123', currentLocation: 'Location 1', currentStatus: 'Status 1' },
    { truckNumber: 'Truck 2', truckOrder: 'Order 456', currentLocation: 'Location 2', currentStatus: 'Status 2' },
    { truckNumber: 'Truck 3', truckOrder: 'Order 789', currentLocation: 'Location 3', currentStatus: 'Status 3' },
  ];
  

const LandingPage = () => {
    const [searchValue, setSearchValue] = React.useState('');
    const [filteredTrucks, setFilteredTrucks] = React.useState(trucksData);
    const navigation = useNavigation();
    
  
    const handleSearch = (text) => {
      setSearchValue(text);
      
      const filteredData = trucksData.filter(truck => {
        return truck.truckNumber.toLowerCase().includes(text.toLowerCase());
      });
      
      setFilteredTrucks(filteredData);
    };
    
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
    const renderTruckRow = ({ item }) => (
        <TouchableOpacity style={styles.truckRow} onPress={() => handleTruckPress(item.id)}>
          <Text style={styles.truckNumber}>{item.truckNumber}</Text>
          <Text style={styles.truckOrder}>{item.truckOrder}</Text>
          <Text style={styles.currentLocation}>{item.currentLocation}</Text>
          <Text style={styles.currentStatus}>{item.currentStatus}</Text>
        </TouchableOpacity>
      );
    const handleTruckClick = (truckId) => {
        navigation.navigate('TruckDetails', { truckId });
      };
  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Truck Dashboard</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Truck Number"
          value={searchValue}
          onChangeText={handleSearch}
        />
        <View style={styles.tableHeaderContainer}>
          <Text style={styles.tableHeaderText}>Truck Number</Text>
          <Text style={styles.tableHeaderText}>Truck Order</Text>
          <Text style={styles.tableHeaderText}>Current Location</Text>
          <Text style={styles.tableHeaderText}>Current Status</Text>
        </View>
        
        <View style={styles.tableLine} />
        
        {/*Page break*/}
        
        {/* <TouchableOpacity
        onPress={() => handleTruckClick(1)}
        style={styles.truckRow}
      >
        <Text style={styles.truckNumber}>Truck #1</Text>
        <Text style={styles.truckOrder}>Truck Order</Text>
        <Text style={styles.currentLocation}>Current Location</Text>
        <Text style={styles.currentStatus}>Current Status</Text>
      </TouchableOpacity> */}
        {/* <FlatList
          data={filteredTrucks}
          renderItem={renderTruckItem}
          keyExtractor={(item) => item.truckNumber}
        /> */}
        {trucksData.map(truck => (
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
        ))}
      </View>
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
          color: '#E24329',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 16,
        },
        placeholder: {
          color: ''
        },
      searchBar: {
        color: '#808080',
        height: 40,
        width: 350,
        borderColor: "rgba(0, 0, 0, 0.3)",
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
        fontWeight: 'medium',
        color: '#E24329',
        fontSize: 16,
      },
      truckItemContainer: {
        flexDirection: 'row',
        marginBottom: 8,
      },
      truckItemText: {
        flex: 1,
        fontSize: 16,
      },
      tableLine: {
        borderBottomWidth: -1,
        borderBottomColor: '#000000',
        marginBottom: 8,
      },
      truckRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#A9A9A9',
        marginBottom: 8,
      },
      truckNumber: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
      },
      truckOrder: {
        flex: 1,
        fontSize: 16,
        color: '#000000',
      },
      currentLocation: {
        flex: 1,
        fontSize: 16,
        color: '#000000',
      },
      currentStatus: {
        flex: 1,
        fontSize: 16,
        color: '#000000',
      },
      
    // container: {
    //   flex: 1,
    //   padding: 16,
    // },
    // heading: {
    //   fontSize: 30,
    //   fontWeight: 'bold',
    //   color: '#FC6D26',
    //   textAlign: 'center',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   marginBottom: 16,
    // },
    // searchBar: {
    //   height: 40,
    //   borderWidth: 1,
    //   borderRadius: 8,
    //   paddingHorizontal: 16,
    //   marginBottom: 16,
    // },
    // tableHeaderContainer: {
    //   flexDirection: 'row',
    //   marginBottom: 8,
    // },
    // tableHeaderText: {
    //   flex: 1,
    //   fontWeight: 'bold',
    //   fontSize: 16,
    // },
    // truckItemContainer: {
    //   flexDirection: 'row',
    //   marginBottom: 8,
    // },
    // truckItemText: {
    //   flex: 1,
    //   fontSize: 16,
    // },
  });

export default LandingPage;