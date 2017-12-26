import React from 'react';
import OrderList from './OrderList';
import OrderService from '../services/OrderService';

class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { resolvedOrders: [] };
  }

  componentDidMount() {
    this.getOrderHistory();
  }

  getOrderHistory = () => {
    OrderService.getOrderHistory()
      .then((resolvedOrders) => {
        this.resolvedOrders = resolvedOrders;
        this.setState({ resolvedOrders: resolvedOrders });
        console.log(this.resolvedOrders);
      })
      .catch((error) => { console.log(error); });
  }

  unresolveOrder = (resolvedOrderId) => {
    OrderService.unresolveOrder(resolvedOrderId);
    // TODO: Move the order from unresolved back to resolved if the service responds with OK
    // Or reload both lists from the server?
  }

  render() {
    return <OrderList
      columns={this.props.columns}
      actionLabel={'Unresolve'}
      action={this.unresolveOrder}
      orders={this.state.resolvedOrders} />;
  }
}

export default OrderHistory;
