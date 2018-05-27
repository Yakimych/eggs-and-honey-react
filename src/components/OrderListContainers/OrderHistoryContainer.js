// @flow
import type { OrderHistoryProps } from '../../types/OrderHistoryTypes';
import React from 'react';
import OrderList from '../OrderList/OrderList';
import OrderService from '../../services/OrderService';

class OrderHistoryContainer extends React.Component<OrderHistoryProps> {
  unresolveOrder = (resolvedOrderId: number) => {
    OrderService
      .unresolveOrder(resolvedOrderId)
      .then((order) => this.props.onOrderUnresolved(order))
      .catch((error) => console.log(error));
  }

  render() {
    return <OrderList
      columns={this.props.columns}
      actionLabel={'Unresolve'}
      action={this.unresolveOrder}
      orders={this.props.resolvedOrders} />;
  }
}

export default OrderHistoryContainer;
