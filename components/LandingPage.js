import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Page() {
  const navigation = useNavigation();

  const handleTilePress = (routename) => {
    navigation.navigate('TruckDetails');
  };

  return (
    <ImageBackground source={require('./assets/background.png')} style={styles.backgroundImage} resizeMode="contain">
      <View style={styles.container}>
        <Text style={[styles.summaryHeading, { color: '#FC6D26' }]}>Truck Status Summary:</Text>

        <View style={styles.headingTile}>
          <Text style={styles.headingText}>Ahead & Parked: 7</Text>
          <Text style={styles.headingText}>Ahead & Moving: 2</Text>
          <Text style={styles.headingText}>Delayed & Parked: 2</Text>
        </View>
        
        <Text style={[styles.summaryHeading, { color: '#FC6D26' }]}>Truck Number:</Text>

        <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('TruckDetails')}>
          <Text style={styles.tileText}>RJ14GN5363</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('TruckDetails')}>
          <Text style={styles.tileText}>NL01AAF3841</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('TruckDetails')}>
          <Text style={styles.tileText}>NL01AF3844</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('TruckDetails')}>
          <Text style={styles.tileText}>HR55AK1223</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile} onPress={() => handleTilePress('TruckDetails')}>
          <Text style={styles.tileText}>RJ14GP8417</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  summaryHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  headingTile: {
    backgroundColor: 'rgba(255,255,255,0.7)', // Whitish translucent color
    width: '80%',
    maxWidth: 400,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headingText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  tile: {
    backgroundColor: 'rgba(255,255,255,0.7)', // Whitish translucent color
    width: '80%',
    maxWidth: 400,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tileText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});



// import React, { useState, useEffect, Component } from 'react';
// import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import axios from 'axios';
// import { ScrollView } from 'react-native-web';
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



// // const trucksData = [
// //     { truckNumber: 'Truck 1', truckOrder: 'Order 123', currentLocation: 'Location 1', currentStatus: 'Status 1' },
// //     { truckNumber: 'Truck 2', truckOrder: 'Order 456', currentLocation: 'Location 2', currentStatus: 'Status 2' },
// //     { truckNumber: 'Truck 3', truckOrder: 'Order 789', currentLocation: 'Location 3', currentStatus: 'Status 3' },
// //   ];

// const LandingPage = () => {
//     const [searchValue, setSearchValue] = React.useState('');
//     const [filteredTrucks, setFilteredTrucks] = React.useState(trucksData);
//     const navigation = useNavigation();
//     const [trucksData, setTrucksData] = useState([]);

//     // useEffect(() => {
//     //   axios
//     //     .get('http://zingtrack.com/GPSRestWebService/rest/GetOnlineData/json?API_KEY=CST22ZTRNIPLMRAPI&VEHICLE_ID=ALL')
//     //     .then((response) => {
//     //       // Set fetched trucks data to state
//     //       setTrucksData(response.data);
//     //     })
//     //     .catch((error) => {
//     //       console.error('Error fetching trucks data:', error);
//     //     });
//     // }, []);



//     useEffect(() => {
//       const fetchTrucksData = async () => {
//         try {
//           const response = await fetch('http://zingtrack.com/GPSRestWebService/rest/GetOnlineData/json?API_KEY=CST22ZTRNIPLMRAPI&VEHICLE_ID=ALL'); 
          
//           const data = await response.json();
//           setTrucksData(data);
//         } catch (error) {
//           console.error('Failed to fetch truck data', error);
//         }
//       };

//       fetchTrucksData();
//     }, []);
  
//     const handleSearch = (text) => {
//       setSearchValue(text);
  
//       const filteredData = trucksData.filter(truck => {
//         return truck.truckNumber.toLowerCase().includes(text.toLowerCase());
//       });
  
//       setFilteredTrucks(filteredData);
//     }
  
//     // const renderTruckItem = ({ item }) => {
//     //   return (
//     //     <View style={styles.truckItemContainer}>
//     //       <Text style={styles.truckItemText}>{item.truckNumber}</Text>
//     //       <Text style={styles.truckItemText}>{item.truckOrder}</Text>
//     //       <Text style={styles.truckItemText}>{item.currentLocation}</Text>
//     //       <Text style={styles.truckItemText}>{item.currentStatus}</Text>
//     //     </View>
//     //   );
//     // }


//     // const renderTruckRow = ({ item }) => (
//     //     <TouchableOpacity style={styles.truckRow} onPress={() => handleTruckPress(item.id)}>
//     //       <Text style={styles.truckNumber}>{item.truckNumber}</Text>
//     //       <Text style={styles.truckOrder}>{item.truckOrder}</Text>
//     //       <Text style={styles.currentLocation}>{item.currentLocation}</Text>
//     //       <Text style={styles.currentStatus}>{item.currentStatus}</Text>
//     //     </TouchableOpacity>
//     //   );

//     const renderTruckRow = ({ item }) => (
//       <TouchableOpacity style={styles.truckRow} onPress={() => handleTruckPress(item.id)}>
//         <Text style={styles.truckNumber} numberOfLines={1} >{item.vehicleId}</Text>
//         <View style = {styles.truckDetailsContainer}>
//         <Text style={styles.truckAddress} numberOfLines={1}>{item.address}</Text>
//         <Text style={styles.currentLocation} numberOfLines={1} >{item.latitude}, {item.longitude}</Text>
//         <Text style={styles.dateTime} numberOfLines={1} >{item.dateTime}</Text>
//         <Text style={styles.dailyMileage} numberOfLines={1} >{item.dailyMileage}</Text>
//         </View>
//       </TouchableOpacity>
//     );
//     const handleTruckPress = (truckId) => {
//         navigation.navigate('TruckDetails', { truckId });
//       };
  
//     return (
//       <View style={styles.container}>
//         <Text style={styles.heading}>Truck Dashboard</Text>
//         <TextInput
//           style={styles.searchBar}
//           placeholder="Search by License Plate"
//           value={searchValue}
//           onChangeText={handleSearch}
//         />
//         <View style={styles.tableHeaderContainer}>
//           <Text style={styles.tableHeaderText}>Truck No.</Text>
//           <Text style={styles.tableHeaderText}>Current Location</Text>
//           <Text style={styles.tableHeaderText}>Current Lat, Long</Text>
//           <Text style={styles.tableHeaderText}>Current Status</Text>

//         </View>
//         {/* <ScrollView horizontal contentContainerStyle={styles.tableContainer}> */}
//         <FlatList
//         data={trucksData.onlineDataList}
//         renderItem={renderTruckRow}
//         keyExtractor={(item, index) => index.toString()}
//         style={styles.table}
        
//       />
//       {/* </ScrollView> */}
      
//         {/* <View style={styles.tableLine} />
//         <TouchableOpacity
//         onPress={() => handleTruckClick(1)}
//         style={styles.truckRow}
//       >
//         <Text style={styles.truckNumber}>Truck #1</Text>
//         <Text style={styles.truckOrder}>Truck Order</Text>
//         <Text style={styles.currentLocation}>Current Location</Text>
//         <Text style={styles.currentStatus}>Current Status</Text>
//       </TouchableOpacity> */}
//       {/* <FlatList
//         data={trucksData.onlineDataList}
//         renderItem={renderTruckRow}
//         keyExtractor={(item, index) => index.toString()}
//         style={styles.truckList}
//       /> */}
//         {/* {trucksData.onlineDataList.map(truck => (
//         <TouchableOpacity
//         key={truck.truckNumber}
//         onPress={() => handleTruckClick(truck.truckNumber)}
//         style={styles.truckRow}
//       >
//         <Text style={styles.truckNumber}>{truck.truckNumber}</Text>
//           <Text style={styles.truckOrder}>{truck.truckOrder}</Text>
//           <Text style={styles.currentLocation}>{truck.currentLocation}</Text>
//           <Text style={styles.currentStatus}>{truck.currentStatus}</Text>
//       </TouchableOpacity>
//         ))} */}
//       </View>
//     //   <View style={styles.container}>
//     //   <Text style={styles.heading}>Truck Dashboard</Text>
//     //   <FlatList
//     //     data={trucksData.onlineDataList}
//     //     renderItem={renderTruckRow}
//     //     keyExtractor={(item, index) => index.toString()}
//     //     style={styles.table}
//     //   />
//     // </View>

//     );
//   };
  
//   const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//       },
//       heading: {
//           fontSize: 30,
//           fontWeight: 'bold',
//           color: '#FC6D26',
//           textAlign: 'center',
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginBottom: 16,
//         },
//       searchBar: {
//         height: 40,
//         borderWidth: 1,
//         borderRadius: 8,
//         paddingHorizontal: 16,
//         marginBottom: 16,
//       },
//       tableHeaderContainer: {
//         flexDirection: 'row',
//         marginBottom: 8,
//       },
//       tableHeaderText: {
//         flex: 1,
//         fontWeight: 'bold',
//         color: "#FC6D26",
//         fontSize: 16,
//       },
//       truckDetailsContainer: {
//         flex: 4,
//         marginLeft: 16,
//       },
//       truckItemContainer: {
//         flexDirection: 'column',
//         marginBottom: 8,
//       },
//       truckItemText: {
//         flex: 1,
//         fontSize: 16,
//       },
//       tableLine: {
//         borderBottomWidth: 1,
//         borderBottomColor: '#FC6D26',
//         marginBottom: 8,
//       },
//       truckRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingVertical: 0,
//         borderBottomWidth: 1,
//         borderBottomColor: '#FC6D26',
//         marginBottom: 8,
//       },
//       truckNumber: {
//         flex: 1,
//         width: 0,
//         fontSize: 14,
//         fontWeight: 'bold',
//         color: '#000000',
//         overflow: 'hidden',
//       },
//       truckOrder: {
//         flex: 2,
//         marginBottom: 4,
//         fontSize: 14,
//         color: '#000000',
//         overflow: 'hidden',
//       },
//       truckAddress: {
//         flex: 1,
//         // width: 80,
//         fontSize: 14,
//         color: '#000000',
//         overflow: 'hidden',
//       },
//       dateTime: {
//         flex: 1,
//         fontSize: 14,
//         // width : 80,
//         color: '#000000',
//         overflow: 'hidden',
//       },
//       dailyMileage: {
//         flex: 1,
//         fontSize: 14,
//         color: '#000000',
//         overflow: 'hidden',
//       },
//       currentStatus: {
//         flex: 1,
//         fontSize: 14,
//         color: '#000000',
//         overflow: 'hidden',
//         // width: 80,
//       },
//       table: {
//         flex: 1,
//         marginTop: 16,
//       },
//       tableContainer: {
//         width: '100%',
//       },
//   });

// export default LandingPage;
