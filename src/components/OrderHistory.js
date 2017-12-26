import React from 'react';
import OrderList from './OrderList';
import OrderService from '../services/OrderService';

class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  unresolveOrder = (resolvedOrderId) => {
    OrderService.unresolveOrder(resolvedOrderId).then((order) => this.props.onOrderUnresolved(order));
  }

  render() {
    return <OrderList
      columns={this.props.columns}
      actionLabel={'Unresolve'}
      action={this.unresolveOrder}
      orders={this.props.resolvedOrders} />;
  }
}

export default OrderHistory;
