// @flow
import type { Order, ResolvedOrder, OrderType } from '../types/OrderTypes';
import dataProviderFactory from './DataProviderFactory';

const dataProvider = dataProviderFactory.getDataProvider();

class OrderService {
  getOrders = (): Promise<Array<Order>> =>
    dataProvider.getOrders();

  getOrderHistory = (): Promise<Array<ResolvedOrder>> => 
    dataProvider.getResolvedOrders();

  getProductTypes = (): Promise<Array<OrderType>> =>
    new Promise((resolve) => {
      resolve([ 'Eggs', 'Honey' ]);
    });

  addOrder = (name: string, order: string) =>
    dataProvider.addOrder(name, order);

  resolveOrder = (orderId: number) =>
    dataProvider.resolveOrder(orderId);

  unresolveOrder = (resolvedOrderId: number) =>
    dataProvider.unresolveOrder(resolvedOrderId);
}

export default new OrderService();
