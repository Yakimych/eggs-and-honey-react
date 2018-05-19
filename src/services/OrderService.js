// @flow
import dataProviderFactory from './DataProviderFactory';

const dataProvider = dataProviderFactory.getDataProvider();

class OrderService {
  getOrders() {
    return dataProvider.getOrders().then((result) => result.items);
  }

  getOrderHistory() {
    return dataProvider.getResolvedOrders().then((result) => result.items);
  }

  getProductTypes(): Promise<Array<string>> {
    return new Promise((resolve) => {
      resolve([ 'Eggs', 'Honey' ]);
    });
  }

  addOrder(name: string, order: string) {
    return dataProvider.addOrder(name, order);
  }

  resolveOrder(orderId: number) {
    return dataProvider.resolveOrder(orderId);
  }

  unresolveOrder(resolvedOrderId: number) {
    return dataProvider.unresolveOrder(resolvedOrderId);
  }
}

export default new OrderService();
