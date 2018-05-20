// @flow
import type { Order, ResolvedOrder, OrderItems, ResolvedOrderItems, ApiResult, ResultWithId } from '../Types/OrderTypes';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/v1/';
const getOrdersUrl = `${apiUrl}orders`;
const getResolvedOrdersUrl = `${apiUrl}resolvedorders`;
const addOrderUrl = `${apiUrl}orders`;
const resolveOrderUrl = `${apiUrl}orders/resolve`;
const unresolveOrderUrl = `${apiUrl}resolvedorders/unresolve`;

class DataProvider {
  getOrders(): Promise<OrderItems> {
    return axios.get(getOrdersUrl).then((result: ApiResult<OrderItems>) => result.data);
  }
  getResolvedOrders(): Promise<ResolvedOrderItems> {
    return axios.get(getResolvedOrdersUrl).then((result: ApiResult<ResolvedOrderItems>) => result.data);
  }
  addOrder(name: string, order: string): Promise<number> {
    return axios.post(addOrderUrl, { name: name, order: order }).then((result: ApiResult<ResultWithId>) => result.data.id);
  }
  resolveOrder(orderId: number): Promise<ResolvedOrder> {
    return axios.post(resolveOrderUrl, { id: orderId }).then((result: ApiResult<ResolvedOrder>) => result.data);
  }
  unresolveOrder(orderId: number): Promise<Order> {
    return axios.post(unresolveOrderUrl, { id: orderId }).then((result: ApiResult<Order>) => result.data);
  }
}

export default new DataProvider();
