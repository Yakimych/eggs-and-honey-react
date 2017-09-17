import axios from 'axios';

const apiUrl = "http://eggsandhoneywebapiinmemory.azurewebsites.net/api/v1/";
const getOrdersUrl = `${apiUrl}orders`;
const addOrderUrl = `${apiUrl}orders/add`;

class DataProvider {
  getOrders() {
    return axios.get(getOrdersUrl).then(result => result.data);
  }
  addOrder(name, order) {
    // TODO: Post the data correctly
    return axios.post(addOrderUrl).then(result => result.data.id);
  }
}

export default new DataProvider();