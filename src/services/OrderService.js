import axios from 'axios';

let orderService = {
  getOrders: getOrders
}

const apiUrl = "http://eggsandhoneywebapiinmemory.azurewebsites.net/api/v1/";
const getOrdersUrl = `${apiUrl}orders`;

function getOrders() {
  return axios.get(getOrdersUrl).then(result => result.data.items);
}

export default orderService;