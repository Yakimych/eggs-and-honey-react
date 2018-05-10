import React from 'react';
import OrderList from '../OrderList/OrderList';
import AddOrder from '../OrderList/AddOrder';
import OrderService from '../../services/OrderService';

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
      .then((orders) => {
        this.orders = orders;
        this.updateFilteredOrders();
      })
      .catch((error) => { console.log(error); });
  }

  getProductTypes = () => {
    OrderService.getProductTypes()
      .then((productTypes) => this.productTypes = productTypes)
      .catch((error) => { console.log(error); });
  }

  onAddOrder = (name, order) => {
    let existingOrders = this.orders.filter((o) => o.name == name && o.order == order);
    if (existingOrders.length > 0) {
      alert('Order already exists!');
    }
    else {
      OrderService.addOrder(name, order)
        .then(() => {
          this.orders = this.orders.concat({ name: name, order: order}); 
          this.updateFilteredOrders(order);
        })
        .catch(() => alert('Failed to add order, please refresh the page and try again'));
    }
  }

  updateFilteredOrders = (productName) => {
    let filteredOrders =
      !productName ? this.orders : this.orders.filter((order) => order.order === productName);

    this.setState({ filteredOrders: filteredOrders });
  }

  render() {
    return (
      <div>
        <OrderList columns={this.props.columns} orders={this.state.filteredOrders} />
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