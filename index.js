// index.js
const { nextISSTimesForMyLocation } = require('./iss');

/*fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});
*/

/*fetchCoordsByIP('108.173.130.99', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  
  console.log('It worked! Returned IP:' , coordinates);
});
*/

/*fetchISSFlyOverTimes({latitude: '51.0486151', longitude: '-114.0708459'}, (error, runtimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Runtimes: ", runtimes);
});
*/




nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});