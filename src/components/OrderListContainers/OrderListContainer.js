// @flow
import type { Order, DisplayOrder } from '../../types/OrderTypes';
import type { OrderListContainerProps, OrderListContainerState } from '../../types/OrderListContainerTypes';
import React from 'react';
import OrderList from '../OrderList/OrderList';
import AddOrder from '../OrderList/AddOrder';
import OrderService from '../../services/OrderService';

class OrderListContainer extends React.Component<OrderListContainerProps, OrderListContainerState> {
  orders = [];
  productTypes = [];

  constructor(props: OrderListContainerProps) {
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

  onAddOrder = (name: string, order: string) => {
    let existingOrders = this.orders.filter((o) => o.name === name && o.order === order);
    if (existingOrders.length > 0) {
      alert('Order already exists!');
    }
    else {
      // TODO: id, datePlaced are invalid
      OrderService.addOrder(name, order)
        .then(() => {
          this.orders = this.orders.concat({ id: 0, name: name, order: order, datePlaced: ''}); 
          this.updateFilteredOrders(order);
        })
        .catch(() => alert('Failed to add order, please refresh the page and try again'));
    }
  }

  updateFilteredOrders = (productName: ?string) => {
    let filteredOrders =
      !productName ? this.orders : this.orders.filter((order) => order.order === productName);

    this.setState({ filteredOrders: filteredOrders });
  }

  toDisplayOrder = (order: Order): DisplayOrder =>
    ({ id: order.id, name: order.name, order: order.order });

  render() {
    return (
      <div>
        <OrderList columns={this.props.columns} displayOrders={this.state.filteredOrders.map(this.toDisplayOrder)} action={() => {}} actionLabel={null} />
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
