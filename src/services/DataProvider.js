// @flow
import type { OrderItems, ResolvedOrderItems, ApiResult, ResultWithId } from '../Types/OrderTypes';
import axios from 'axios';

const apiUrl = 'http://eggsandhoneywebapiinmemory.azurewebsites.net/api/v1/';
const getOrdersUrl = `${apiUrl}orders`;
const getResolvedOrdersUrl = `${apiUrl}resolvedorders`;
const addOrderUrl = `${apiUrl}orders/add`;
const resolveOrderUrl = `${apiUrl}orders/resolve`;
const unresolveOrderUrl = `${apiUrl}resolvedorders/unresolve`;

class DataProvider {
  getOrders() {
    return axios.get(getOrdersUrl).then((result: ApiResult<OrderItems>) => result.data);
  }
  getResolvedOrders() {
    return axios.get(getResolvedOrdersUrl).then((result: ApiResult<ResolvedOrderItems>) => result.data);
  }
  addOrder(name: string, order: string) {
    return axios.post(addOrderUrl, { name: name, order: order }).then((result: ApiResult<ResultWithId>) => result.data.id);
  }
  resolveOrder(orderId: number) {
    return axios.post(resolveOrderUrl, { id: orderId }).then((result: ApiResult<ResultWithId>) => result.data);
  }
  unresolveOrder(orderId: number) {
    return axios.post(unresolveOrderUrl, { id: orderId }).then((result: ApiResult<ResultWithId>) => result.data);
  }
}

export default new DataProvider();
