import dataProviderFactory from './DataProviderFactory';

const dataProvider = dataProviderFactory.getDataProvider();

let orderService = {
  getOrders: getOrders
}

function getOrders() {
  return dataProvider.getOrders().then(result => result.items);
}

export default orderService;