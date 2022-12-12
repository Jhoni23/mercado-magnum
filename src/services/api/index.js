const axios = require('axios').default;

const api = axios.create({
  baseURL: 'http://192.168.1.17:3333',
  timeout: 3000,
});

module.exports.updateManyProducts = async (data, cancelToken) => (api.put('/product', data, cancelToken ? { cancelToken } : undefined));

module.exports.api = api;
