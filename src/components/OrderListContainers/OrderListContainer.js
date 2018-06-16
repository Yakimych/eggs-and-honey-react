// @flow
import type { Order, DisplayOrder, OrderType } from '../../types/OrderTypes';
import type { OrderListContainerProps, OrderListContainerState } from '../../types/OrderListContainerTypes';
import React from 'react';
import OrderList from '../OrderList/OrderList';
import AddOrder from '../OrderList/AddOrder';
import OrderService from '../../services/OrderService';

class OrderListContainer extends React.Component<OrderListContainerProps, OrderListContainerState> {
  orders: Array<DisplayOrder> = [];

  constructor(props: OrderListContainerProps) {
    super(props);
    this.state = {
      filteredOrders: [],
      productTypes: []
    };
  }

  componentDidMount() {
    this.getOrders();
    this.getProductTypes();
  }

  getOrders = () => {
    OrderService.getOrders()
      .then((orders) => {
        this.orders = orders.map(this.toDisplayOrder);
        this.updateFilteredOrders();
      })
      .catch((error) => { console.log(error); });
  }

  getProductTypes = () => {
    OrderService.getProductTypes()
      .then((productTypes) => this.setState({ productTypes: productTypes }))
      .catch((error) => { console.log(error); });
  }

  onAddOrder = (name: string, order: OrderType) => {
    let existingOrders = this.orders.filter((o) => o.name === name && o.order === order);
    if (existingOrders.length > 0) {
      alert('Order already exists!');
    }
    else {
      OrderService.addOrder(name, order)
        .then((addedOrderId: number) => {
          this.orders = this.orders.concat({ id: addedOrderId, name: name, order: order }); 
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
        <OrderList columns={this.props.columns} displayOrders={this.state.filteredOrders} action={() => {}} />
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
