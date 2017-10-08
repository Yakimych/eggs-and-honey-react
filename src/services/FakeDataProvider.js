const fakeOrders = {
  "items": [
    { name: "FakeName1", order: "Eggs" },
    { name: "FakeName2", order: "Eggs" },
    { name: "FakeName3", order: "Honey" }
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
