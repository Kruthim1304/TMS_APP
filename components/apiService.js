import axios from 'axios';

// Fetch truck data from API
export const fetchTruckData = async () => {
  try {
    const response = await axios.get('http://zingtrack.com/GPSRestWebService/rest/GetOnlineData/json?API_KEY=CST22ZTRNIPLMRAPI&VEHICLE_ID=ALL');
    return response.data; 
  } catch (error) {
    console.error('Failed to fetch truck data:', error);
    throw error;
  }
};




// 