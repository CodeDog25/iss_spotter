const request = require('request-promise-native');

const fetchMyIP = () => {
    return request('https://api.ipify.org?format=json');
  };
/* 
 * Makes a request to ipwho.is using the provided IP address to get its geographical information (latitude/longitude)
 * Input: JSON string containing the IP address
 * Returns: Promise of request for lat/lon
 */
const fetchCoordsByIP = (body) => {
    const ip = JSON.parse(body).ip;
    return request(`http://ipwho.is/ `+ ip);
  };
  
  const fetchISSFlyOverTimes = (body) => {
    const { latitude, longitude } = JSON.parse(body).data;
    return request(`https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);
  };
  
  const nextISSTimesForMyLocation = () => {
    return fetchMyIP()
      .then(fetchCoordsByIP)
      .then(fetchISSFlyOverTimes)
      .then((data) => {
        const { response } = JSON.parse(data);
        return response;
      });
  };
  
  module.exports = { 
    nextISSTimesForMyLocation
};