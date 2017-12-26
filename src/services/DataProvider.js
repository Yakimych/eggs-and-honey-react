import axios from 'axios';

const apiUrl = 'http://eggsandhoneywebapiinmemory.azurewebsites.net/api/v1/';
const getOrdersUrl = `${apiUrl}orders`;
const getResolvedOrdersUrl = `${apiUrl}resolvedorders`;
const addOrderUrl = `${apiUrl}orders/add`;

class DataProvider {
  getOrders() {
    return axios.get(getOrdersUrl).then((result) => result.data);
  }
  getResolvedOrders() {
    return axios.get(getResolvedOrdersUrl).then((result) => result.data);
  }
  addOrder(name, order) {
    return axios.post(addOrderUrl, { name: name, order: order }).then((result) => result.data.id);
  }
  resolveOrder(orderId) {
    return new Promise((resolve) => {
      // TODO: Make API call
      console.log(`FakeDataProvider: resolving order: ${orderId}`);
      resolve();
    });
  }
  unresolveOrder(orderId) {
    return new Promise((resolve) => {
      // TODO: Make API call
      console.log(`FakeDataProvider: unresolving order: ${orderId}`);
      resolve();
    });
  }
}

export default new DataProvider();
