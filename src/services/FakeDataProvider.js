// @flow
import type { Order, ResolvedOrder, OrderItems, ResolvedOrderItems, ResultWithId } from '../Types/OrderTypes';
let currentOrderId = 1;
const fakeOrders: OrderItems = {
  items: [
    { id: currentOrderId++, name: 'FakeName1', order: 'Eggs', datePlaced: '2015-01-01' },
    { id: currentOrderId++, name: 'FakeName2', order: 'Eggs', datePlaced: '2015-01-02' },
    { id: currentOrderId++, name: 'FakeName3', order: 'Honey', datePlaced: '2015-01-03' }
  ]
};

let currentResolvedOrderId = 1;
const fakeResolvedOrders: ResolvedOrderItems = {
  items: [
    { id: currentResolvedOrderId++, name: 'FakeName10', order: 'Eggs', datePlaced: '2015-01-01', dateResolved: '2016-01-01' },
    { id: currentResolvedOrderId++, name: 'FakeName20', order: 'Eggs', datePlaced: '2015-01-02', dateResolved: '2016-01-02' },
    { id: currentResolvedOrderId++, name: 'FakeName30', order: 'Honey', datePlaced: '2015-01-03', dateResolved: '2016-01-03' }
  ]
};

class FakeDataProvider {
  getOrders(): Promise<OrderItems> {
    return new Promise((resolve) => {
      resolve({ items: fakeOrders.items.slice() });
    });
  }

  getResolvedOrders(): Promise<ResolvedOrderItems> {
    return new Promise((resolve) => {
      resolve({ items: fakeResolvedOrders.items.slice() });
    });
  }

  addOrder(name: string, order: string): Promise<ResultWithId> {
    return new Promise((resolve) => {
      console.log(`FakeDataProvider: adding order: ${name} ${order}`);
      fakeOrders.items.push({ id: currentOrderId++, name: name, order: order, datePlaced: new Date().toISOString().substring(0, 10) });
      resolve({ id: currentOrderId });
    });
  }

  resolveOrder(orderId: number): Promise<ResolvedOrder> {
    return new Promise((resolve, reject) => {
      console.log(`FakeDataProvider: resolving order: ${orderId}`);
      let orderToResolve = fakeOrders.items.find((order) => order.id === orderId);
      if (!orderToResolve) {
        reject('Order to resolve not found');
      }
      else {
        fakeOrders.items = fakeOrders.items.filter((order) => order.id !== orderId);
        let newResolvedOrder: ResolvedOrder = 
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

  unresolveOrder(resolvedOrderId: number): Promise<Order> {
    return new Promise((resolve, reject) => {
      console.log(`FakeDataProvider: unresolving order: ${resolvedOrderId}`);
      let orderToUnresolve = fakeResolvedOrders.items.find((order) => order.id === resolvedOrderId);
      if (!orderToUnresolve) {
        reject('Order to unresolve not found');
      }
      else {
        fakeResolvedOrders.items = fakeResolvedOrders.items.filter((order) => order.id !== resolvedOrderId);
        let newUnresolvedOrder: Order = 
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
