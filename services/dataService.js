const axios = require('axios');
const DataEntry = require('../models/dataEntry');

// fetching crypto currency prices from coingecko api
const fetchData = async () => {
  const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
  console.log("fetch api data: ",response.data);
  return response.data;
};

const processData = (data) => {
  const values = Object.values(data).map(item => item.usd);
  const sum = values.reduce((acc, val) => acc + val, 0);
  const average = sum / values.length;
  console.log("average: ",average);
  return { average };
};

// saving the average data in the database along with the date
const saveData = async (data) => {
  const entry = new DataEntry(data);
  await entry.save();
};

module.exports = { fetchData, processData, saveData };