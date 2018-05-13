// @flow
import type { Order, ResolvedOrder } from '../../types/OrderTypes';
import React from 'react';
import AdminOrderListContainer from '../OrderListContainers/AdminOrderListContainer';
import OrderService from '../../services/OrderService';
import OrderHistory from '../OrderListContainers/OrderHistoryContainer';

type AdminPageState = {
  orders: Array<Order>,
  resolvedOrders: Array<ResolvedOrder>
}

let columns = [
  // TODO: Make name and order hardcoded in the list?
  { name: 'name', label: 'Name' },
  { name: 'order', label: 'Order' },
  { name: 'datePlaced', label: 'Date Placed' }
];

let historyColumns = columns.concat([ { name: 'dateResolved', label: 'Date Resolved' } ]);

class AdminPage extends React.Component<any, AdminPageState> {
  state = { orders: [], resolvedOrders: [] };

  componentDidMount() {
    this.getOrders();
    this.getOrderHistory();
  }

  getOrders = () => {
    OrderService.getOrders()
      .then((orders) => this.setState({ orders: orders }))
      .catch((error) => console.log(error));
  }

  getOrderHistory = () => {
    OrderService.getOrderHistory()
      .then((resolvedOrders) => this.setState({ resolvedOrders: resolvedOrders }))
      .catch((error) => console.log(error));
  }

  handleOrderResolutionChanged = () => {
    this.getOrders();
    this.getOrderHistory();
  }

  render() {
    return (
      <div>
        <h1>Admin View</h1>
        <AdminOrderListContainer
          columns={columns}
          orders={this.state.orders}
          onOrderResolved={this.handleOrderResolutionChanged} />
        <OrderHistory
          columns={historyColumns}
          resolvedOrders={this.state.resolvedOrders}
          onOrderUnresolved={this.handleOrderResolutionChanged} />
      </div>
    );
  }
}

export default AdminPage;
