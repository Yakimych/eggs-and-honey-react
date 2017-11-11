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
      .then(resolvedOrders => {
        this.resolvedOrders = resolvedOrders;
        this.setState({ resolvedOrders: resolvedOrders });
        console.log(this.resolvedOrders);
      })
      .catch(error => { console.log(error); });
  }

  render() {
    // Send in the array of columns (including Resolve/Unresolve button)?
    return <OrderList orders={this.state.resolvedOrders} />;
  }
}

export default OrderHistory;
