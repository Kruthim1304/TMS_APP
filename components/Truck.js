const request = require('postman-request');

request('http://zingtrack.com/GPSRestWebService/rest/GetTripData/json?API_KEY=CST22ZTTRIPRNIPLAPI&PLANT=RNAIPL', function (error, response, body) {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
    return;
  }

  const data = JSON.parse(body);
  const truckDetails = [];

  data.tripList.forEach(truck => {
    const truckData = {
      truckNumber: truck.truckNo,
      latitude: truck.currentLat,
      longitude: truck.currentLog,
      currentLocation: truck.currentLoc,
      nextLocation: truck.nextLoc,
      DistanceTravelled: truck.disCovered,
      TotalDistance: truck.totalDis
    };

    truckDetails.push(truckData);
  });

  console.log(truckDetails);

});



