import React from 'react';
import OrderList from './OrderList';
import AddOrder from './AddOrder';
import OrderService from '../services/OrderService';

class OrderListContainer extends React.Component {
  orders = [];
  productTypes = [];

  constructor(props) {
    super(props);
    this.state = {
      filteredOrders: []
    };
  }

  componentDidMount() {
    this.getOrders();
    this.getProductTypes();
  }

  getOrders = () => {
    OrderService.getOrders()
      .then(orders => {
        this.orders = orders;
        this.updateFilteredOrders();
      })
      .catch(error => { console.log(error); });
  }

  getProductTypes = () => {
    OrderService.getProductTypes()
      .then(productTypes => this.productTypes = productTypes)
      .catch(error => { console.log(error); });
  }

 onAddOrder = (name, order) => {
    OrderService.addOrder(name, order).then(() => {
      this.orders = this.orders.concat({ name: name, order: order}); 
      this.updateFilteredOrders(order);
    });
  }
 
  updateFilteredOrders = (productName) => {
    let filteredOrders =
      !productName ? this.orders : this.orders.filter((order) => order.order === productName);

    this.setState({ filteredOrders: filteredOrders });
  }

  render() {
    return (
     <div>
       <OrderList orders={this.state.filteredOrders} />
       <AddOrder
         onAddOrder={this.onAddOrder}
         products={this.productTypes}
         activeProductChanged={this.updateFilteredOrders}
       />
     </div>
    );
  }
}

export default OrderListContainer;
