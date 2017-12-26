import dataProviderFactory from './DataProviderFactory';

const dataProvider = dataProviderFactory.getDataProvider();

let orderService = {
  getOrders: getOrders,
  getOrderHistory: getOrderHistory,
  getProductTypes: getProductTypes,
  addOrder: addOrder,
  resolveOrder: resolveOrder,
  unresolveOrder: unresolveOrder
};

function getOrders() {
  return dataProvider.getOrders().then((result) => result.items);
}

function getOrderHistory() {
  return dataProvider.getResolvedOrders().then((result) => result.items);
}

function getProductTypes() {
  return new Promise((resolve) => {
    resolve([ 'Eggs', 'Honey' ]);
  });
}

function addOrder(name, order) {
  return dataProvider.addOrder(name, order);
}

function resolveOrder(orderId) {
  return dataProvider.resolveOrder(orderId);
}

function unresolveOrder(resolvedOrderId) {
  return dataProvider.unresolveOrder(resolvedOrderId);
}

export default orderService;
