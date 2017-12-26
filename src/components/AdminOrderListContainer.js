import React from 'react';
import OrderList from './OrderList';
import ProductSelector from './ProductSelector';
import OrderService from '../services/OrderService';

class AdminOrderListContainer extends React.Component {
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

  resolveOrder = (orderId) => {
    OrderService.resolveOrder(orderId);
    // TODO: Move order from active to resolved if the service responds with OK
    // Or yet again - reload both lists
  }

  render() {
    return (
      <div>
        <ProductSelector
          products={this.productTypes}
          onActiveChanged={this.updateFilteredOrders} />
        <OrderList
          action={this.resolveOrder}
          actionLabel={'Resolve'}
          columns={this.props.columns}
          orders={this.state.filteredOrders} />
      </div>
    );
  }
}

export default AdminOrderListContainer;
