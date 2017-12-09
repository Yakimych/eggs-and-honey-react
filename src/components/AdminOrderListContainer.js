import React from 'react';
import OrderList from './OrderList';
import ProductSelector from './ProductSelector';
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
 
  updateFilteredOrders = (selectedProductType) => {
    let filteredOrders =
      !selectedProductType ? this.orders : this.orders.filter((order) => order.order === selectedProductType);

    this.setState({ filteredOrders: filteredOrders });
  }

  render() {
    return (
      <div>
        <ProductSelector
          products={this.productTypes}
          onActiveChanged={this.updateFilteredOrders} />
        <OrderList orders={this.state.filteredOrders} />
      </div>
    );
  }
}

export default OrderListContainer;
