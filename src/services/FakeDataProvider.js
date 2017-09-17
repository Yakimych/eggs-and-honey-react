const fakeOrders = {
  "items": [
    { name: "FakeName1", order: "FakeOrder1" },
    { name: "FakeName2", order: "FakeOrder2" },
    { name: "FakeName3", order: "FakeOrder3" }
  ]
};

class FakeDataProvider {
  getOrders() {
    return new Promise((resolve, reject) => {
      resolve(fakeOrders);
    });
  };

  addOrder(name, order) {
    return new Promise((resolve, reject) => {
      resolve();
    });
  };
}

export default new FakeDataProvider();