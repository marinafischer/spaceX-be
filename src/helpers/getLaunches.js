const axios = require('axios');

const getLaunches = async (route) => {
  const API = `https://api.spacexdata.com/v5/launches/${route}`;
  const response = await axios.get(API);
  return response.data;
};

module.exports = getLaunches;
