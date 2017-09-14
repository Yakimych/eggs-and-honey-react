import axios from 'axios';

let orderService = {
  getOrders: getOrders
}

function getOrders() {
  // return new Promise((resolve, reject) => {
  //   let fakeOrders =
  //     [
  //       { name: "YaK", order: "Eggs" },
  //       { name: "YaK", order: "Honey" },
  //       { name: "Rita", order: "Honey" }
  //     ];

  //   resolve(fakeOrders);
  // });
}

export default orderService;