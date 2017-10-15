import React from 'react';
import OrderList from './OrderList';
import AddOrder from './AddOrder';
import OrderService from '../services/OrderService';

class OrderListContainer extends React.Component {
  orders = [];

  constructor(props) {
    super(props);
    this.state = {
      filteredOrders: [],
      productTypes: [ "Eggs", "Honey" ]
    };
  }

  componentDidMount() {
    this.getOrders();
  }

  getOrders = () => {
    OrderService.getOrders()
      .then(orders => {
        this.orders = orders;
        this.updateFilteredOrders(-1);
      })
      .catch(error => { console.log(error); });
  }

 onAddOrder = (name, order) => {
    OrderService.addOrder(name, order).then(() => {
      this.orders = this.orders.concat({ name: name, order: order}); 
      this.updateFilteredOrders(this.state.productTypes.indexOf(order));
    });
  }
 
  updateFilteredOrders = (productIndex) => {
    const selectedProductName = this.state.productTypes[productIndex];
    
    let filteredOrders =
      productIndex === -1 ?
        this.orders :
        this.orders.filter((order) =>
          order.order === selectedProductName);

    this.setState({ filteredOrders: filteredOrders });
  }

  render() {
    return (
     <div>
       <OrderList orders={this.state.filteredOrders} />
       <AddOrder
         onAddOrder={this.onAddOrder}
         products={this.state.productTypes}
         activeProductChanged={this.updateFilteredOrders}
       />
     </div>
    );
  }
}

export default OrderListContainer;
