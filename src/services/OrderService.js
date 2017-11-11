import dataProviderFactory from './DataProviderFactory';

const dataProvider = dataProviderFactory.getDataProvider();

let orderService = {
  getOrders: getOrders,
  getOrderHistory: getOrderHistory,
  getProductTypes: getProductTypes,
  addOrder: addOrder
}

function getOrders() {
  return dataProvider.getOrders().then(result => result.items);
}

function getOrderHistory() {
  return dataProvider.getResolvedOrders().then(result => result.items);
}

function getProductTypes() {
  return new Promise((resolve, reject) => {
    resolve([ "Eggs", "Honey" ]);
  });
}

function addOrder(name, order) {
  return dataProvider.addOrder(name, order);
}

export default orderService;
