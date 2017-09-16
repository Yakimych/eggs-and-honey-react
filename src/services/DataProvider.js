import axios from 'axios';

const apiUrl = "http://eggsandhoneywebapiinmemory.azurewebsites.net/api/v1/";
const getOrdersUrl = `${apiUrl}orders`;

class DataProvider {
  getOrders() {
    return axios.get(getOrdersUrl).then(result => result.data);
  }
}

export default new DataProvider();