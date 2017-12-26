let currentOrderId = 1;
const fakeOrders = {
  'items': [
    { id: currentOrderId++, name: 'FakeName1', order: 'Eggs', datePlaced: '2015-01-01' },
    { id: currentOrderId++, name: 'FakeName2', order: 'Eggs', datePlaced: '2015-01-02' },
    { id: currentOrderId++, name: 'FakeName3', order: 'Honey', datePlaced: '2015-01-03' }
  ]
};

let currentResolvedOrderId = 1;
const fakeResolvedOrders = {
  'items': [
    { id: currentResolvedOrderId++, name: 'FakeName10', order: 'Eggs', datePlaced: '2015-01-01', dateResolved: '2016-01-01' },
    { id: currentResolvedOrderId++, name: 'FakeName20', order: 'Eggs', datePlaced: '2015-01-02', dateResolved: '2016-01-02' },
    { id: currentResolvedOrderId++, name: 'FakeName30', order: 'Honey', datePlaced: '2015-01-03', dateResolved: '2016-01-03' }
  ]
};

class FakeDataProvider {
  getOrders() {
    return new Promise((resolve) => {
      resolve({ items: fakeOrders.items.slice() });
    });
  }

  getResolvedOrders() {
    return new Promise((resolve) => {
      resolve({ items: fakeResolvedOrders.items.slice() });
    });
  }

  addOrder(name, order) {
    return new Promise((resolve) => {
      console.log(`FakeDataProvider: adding order: ${name} ${order}`);
      fakeOrders.push({ id: currentOrderId++, name: name, order: order, datePlaced: new Date().toISOString().substring(0, 10) });
      resolve();
    });
  }

  resolveOrder(orderId) {
    return new Promise((resolve, reject) => {
      console.log(`FakeDataProvider: resolving order: ${orderId}`);
      let orderToResolve = fakeOrders.items.find((order) => order.id === orderId);
      if (!orderToResolve) {
        reject('Order to resolve not found');
      }
      else {
        fakeOrders.items = fakeOrders.items.filter((order) => order.id !== orderId);
        let newResolvedOrder = 
          {
            id: currentResolvedOrderId++,
            name: orderToResolve.name,
            order: orderToResolve.order,
            datePlaced: orderToResolve.datePlaced,
            dateResolved: new Date().toISOString().substring(0, 10)
          };
        fakeResolvedOrders.items.push(newResolvedOrder);
        resolve(newResolvedOrder);
      }
    });
  }

  unresolveOrder(resolvedOrderId) {
    return new Promise((resolve, reject) => {
      console.log(`FakeDataProvider: unresolving order: ${resolvedOrderId}`);
      let orderToUnresolve = fakeResolvedOrders.items.find((order) => order.id === resolvedOrderId);
      if (!orderToUnresolve) {
        reject('Order to unresolve not found');
      }
      else {
        fakeResolvedOrders.items = fakeResolvedOrders.items.filter((order) => order.id !== resolvedOrderId);
        let newUnresolvedOrder = 
          {
            id: currentOrderId++,
            name: orderToUnresolve.name,
            order: orderToUnresolve.order,
            datePlaced: orderToUnresolve.datePlaced
          };
        fakeOrders.items.push(newUnresolvedOrder);
        resolve(newUnresolvedOrder);
      }
    });
  }
}

export default new FakeDataProvider();
