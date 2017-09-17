import dataProviderFactory from './DataProviderFactory';

const dataProvider = dataProviderFactory.getDataProvider();

let orderService = {
  getOrders: getOrders,
  addOrder: addOrder
}

function getOrders() {
  return dataProvider.getOrders().then(result => result.items);
}

function addOrder(name, order) {
  return dataProvider.addOrder(name, order);
}

export default orderService;