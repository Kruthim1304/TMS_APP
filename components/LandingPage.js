import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const LandingPage = () => {
  const [truckStatuses, setTruckStatuses] = useState({
    aheadAndParkedCount: 0,
    aheadAndMovingCount: 0,
    delayAndParkedCount: 0,
    delayAndMovingCount: 0,
  });
  const [showTable, setShowTable] = useState(false);
  const [truckData, setTruckData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://zingtrack.com/GPSRestWebService/rest/GetTripData/json?API_KEY=CST22ZTTRIPRNIPLAPI&PLANT=RNAIPL'
        );
        const data = response.data;

        let aheadAndParkedCount = 0;
        let aheadAndMovingCount = 0;
        let delayAndParkedCount = 0;
        let delayAndMovingCount = 0;

        data.tripList.forEach((truck) => {
          if (truck.truckSts === 'Ahead & Parked') {
            aheadAndParkedCount++;
          } else if (truck.truckSts === 'Ahead & Moving') {
            aheadAndMovingCount++;
          } else if (truck.truckSts === 'Delay & Parked') {
            delayAndParkedCount++;
          } else if (truck.truckSts === 'Delay & Moving') {
            delayAndMovingCount++;
          }
        });

        setTruckStatuses({
          aheadAndParkedCount,
          aheadAndMovingCount,
          delayAndParkedCount,
          delayAndMovingCount,
        });

        setTruckData(data.tripList);
        setShowTable(true);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  const fetchTruckData = (status) => {
    axios
      .get(
        `http://zingtrack.com/GPSRestWebService/rest/GetTripData/json?API_KEY=CST22ZTTRIPRNIPLAPI&PLANT=RNAIPL&STATUS=${status}`
      )
      .then((response) => {
        const data = response.data;
        const filteredData = data.tripList.filter((truck) => truck.truckSts === status);
        setTruckData(filteredData);
        setShowTable(true);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

 
const fetchAllTruckData = () => {
  axios
    .get(
      'http://zingtrack.com/GPSRestWebService/rest/GetTripData/json?API_KEY=CST22ZTTRIPRNIPLAPI&PLANT=RNAIPL'
    )
    .then((response) => {
      const data = response.data;
      setTruckData(data.tripList);
      setShowTable(true);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
};


const navigation = useNavigation();

const handleTruckNumberClick = (truckNumber, currentLocation) => {
  navigation.navigate('TruckDetails', { truckNumber, currentLocation });
};


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>

      <View style={styles.container}>
      <View style={styles.backdrop}>
        <Image
            style={styles.backdropImg}
            source={require("../assets/image001.png")}
          />
        </View>
        <View>
        <Text style={styles.heading}> Truck Summary :  </Text>
        </View>
        <View style={styles.row}>
       
          <TouchableOpacity style={styles.box} onPress={() => fetchTruckData('Ahead & Parked')}>
            <Text style={styles.label}>Ahead & Parked</Text>
            <Text style={styles.count}>{truckStatuses.aheadAndParkedCount}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => fetchTruckData('Ahead & Moving')}>
            <Text style={styles.label}>Ahead & Moving</Text>
            <Text style={styles.count}>{truckStatuses.aheadAndMovingCount}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.box} onPress={() => fetchTruckData('Delay & Parked')}>
            <Text style={styles.label}>Delay & Parked</Text>
            <Text style={styles.count}>{truckStatuses.delayAndParkedCount}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => fetchTruckData('Delay & Moving')}>
            <Text style={styles.label}>Delay & Moving</Text>
            <Text style={styles.count}>{truckStatuses.delayAndMovingCount}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.allButton} onPress={fetchAllTruckData}>
          <Text style={styles.allButtonText}>All</Text>
        </TouchableOpacity>
        {showTable && (
          <View style={styles.tableContainer}>
            <Text style={styles.tableHeading}>Truck Data : </Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableHeader}>Truck Number</Text>
                <View style={styles.verticalLine} />

                <Text style={styles.tableHeader}>Status</Text>
                <View style={styles.verticalLine} />

                <Text style={styles.tableHeader}>Current Location</Text>
                <View style={styles.verticalLine} />

                <Text style={styles.tableHeader}>ETA</Text>
              </View>
              {truckData.map((truck) => (
                <TouchableOpacity
                style={styles.tableRow}
                key={truck.truckNo}
                onPress={() =>
                  handleTruckNumberClick(truck.truckNo, truck.currentLoc)
                }
              >
                <Text style={styles.tableCell}>{truck.truckNo}</Text>
                <View style={styles.verticalLine} />
                <Text style={styles.tableCell}>{truck.truckSts}</Text>
                <View style={styles.verticalLine} />
                <Text style={styles.tableCell}>{truck.currentLoc}</Text>
                <View style={styles.verticalLine} />
                <Text style={styles.tableCell}>{truck.eta}</Text>
              </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 5,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FC6D26',
    marginTop: 30,
    marginLeft: 10,
    marginBottom:10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  box: {
    width: 130,
    height: 60,
    backgroundColor: 'gray',
    borderRadius: 5,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    padding : 2,
  },
  count: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  tableContainer: {
    marginTop: 0,
  },
  tableHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    color:'#FC6D26',


  },
  table: {
    borderWidth: 2,
    borderColor: '#FC6D26',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#FC6D26',
    paddingVertical: 8,
  },
  tableHeader: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
    color:'#f8a145',
  
  },
  tableCell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    textAlign: 'center',
    fontSize : 12,
    fontWeight:'bold',
    color:'white',
    justifyContent: 'center', 

  },

  verticalLine: {
    width: 2,
    backgroundColor: '#FC6D26',
  },

  allButton: {
    alignSelf: 'center',
    alignItems:'center',
    backgroundColor: 'gray',
    width:60,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  allButtonText: {
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

export default LandingPage;
