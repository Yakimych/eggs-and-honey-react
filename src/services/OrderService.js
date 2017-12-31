import dataProviderFactory from './DataProviderFactory';

const dataProvider = dataProviderFactory.getDataProvider();

class OrderService {
  getOrders() {
    return dataProvider.getOrders().then((result) => result.items);
  }

  getOrderHistory() {
    return dataProvider.getResolvedOrders().then((result) => result.items);
  }

  getProductTypes() {
    return new Promise((resolve) => {
      resolve([ 'Eggs', 'Honey' ]);
    });
  }

  addOrder(name, order) {
    return dataProvider.addOrder(name, order);
  }

  resolveOrder(orderId) {
    return dataProvider.resolveOrder(orderId);
  }

  unresolveOrder(resolvedOrderId) {
    return dataProvider.unresolveOrder(resolvedOrderId);
  }
}

export default new OrderService();
