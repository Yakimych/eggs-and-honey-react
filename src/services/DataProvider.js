import axios from 'axios';

const apiUrl = 'http://eggsandhoneywebapiinmemory.azurewebsites.net/api/v1/';
const getOrdersUrl = `${apiUrl}orders`;
const getResolvedOrdersUrl = `${apiUrl}resolvedorders`;
const addOrderUrl = `${apiUrl}orders/add`;
const resolveOrderUrl = `${apiUrl}orders/resolve`;
const unresolveOrderUrl = `${apiUrl}resolvedorders/unresolve`;

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
    return axios.post(resolveOrderUrl, { id: orderId }).then((result) => result.data);
  }
  unresolveOrder(orderId) {
    return axios.post(unresolveOrderUrl, { id: orderId }).then((result) => result.data);
  }
}

export default new DataProvider();
