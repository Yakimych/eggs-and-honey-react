// @flow
import type { Order, ResolvedOrder } from '../../types/OrderTypes';
import type { OrderListColumn } from '../../types/OrderListTypes';
import React from 'react';
import OrderList from '../OrderList/OrderList';
import OrderService from '../../services/OrderService';

type OrderHistoryProps = {
  columns: Array<OrderListColumn>,
  resolvedOrders: Array<ResolvedOrder>,
  onOrderUnresolved: (order: Order) => void
}

class OrderHistoryContainer extends React.Component<OrderHistoryProps> {
  constructor(props: OrderHistoryProps) {
    super(props);
  }

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
