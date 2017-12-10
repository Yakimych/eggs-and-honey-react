const fakeOrders = {
  'items': [
    { name: 'FakeName1', order: 'Eggs', datePlaced: '2015-01-01' },
    { name: 'FakeName2', order: 'Eggs', datePlaced: '2015-01-02' },
    { name: 'FakeName3', order: 'Honey', datePlaced: '2015-01-03' }
  ]
};

const fakeResolvedOrders = {
  'items': [
    { name: 'FakeName10', order: 'Eggs', datePlaced: '2015-01-01', dateResolved: '2016-01-01' },
    { name: 'FakeName20', order: 'Eggs', datePlaced: '2015-01-02', dateResolved: '2016-01-02' },
    { name: 'FakeName30', order: 'Honey', datePlaced: '2015-01-03', dateResolved: '2016-01-03' }
  ]
};

class FakeDataProvider {
  getOrders() {
    return new Promise((resolve) => {
      resolve(fakeOrders);
    });
  }

  getResolvedOrders() {
    return new Promise((resolve) => {
      resolve(fakeResolvedOrders);
    });
  }

  addOrder(name, order) {
    return new Promise((resolve) => {
      console.log(`FakeDataProvider: adding order: ${name} ${order}`);
      resolve();
    });
  }
}

export default new FakeDataProvider();
